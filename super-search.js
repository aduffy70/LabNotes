/* super-search
Author: Kushagra Gour (http://kushagragour.in)
MIT Licensed
*/
(function () {
	var searchFile = '/feed.xml',
		searchEl,
		searchInputEl,
		searchResultsEl,
		currentInputValue = '',
		lastSearchResultHash,
		posts = [];

	// Changes XML to JSON
	// Modified version from here: http://davidwalsh.name/convert-xml-json
	function xmlToJson(xml) {
		// Create the return object
		var obj = {};
		if (xml.nodeType == 3) { // text
			obj = xml.nodeValue;
		}

		// do children
		// If all text nodes inside, get concatenated text from them.
		var textNodes = [].slice.call(xml.childNodes).filter(function (node) { return node.nodeType === 3; });
		if (xml.hasChildNodes() && xml.childNodes.length === textNodes.length) {
			obj = [].slice.call(xml.childNodes).reduce(function (text, node) { return text + node.nodeValue; }, '');
		}
		else if (xml.hasChildNodes()) {
			for(var i = 0; i < xml.childNodes.length; i++) {
				var item = xml.childNodes.item(i);
				var nodeName = item.nodeName;
				if (typeof(obj[nodeName]) == "undefined") {
					obj[nodeName] = xmlToJson(item);
				} else {
					if (typeof(obj[nodeName].push) == "undefined") {
						var old = obj[nodeName];
						obj[nodeName] = [];
						obj[nodeName].push(old);
					}
					obj[nodeName].push(xmlToJson(item));
				}
			}
		}
		return obj;
	}

	function getPostsFromXml(xml) {
		var json = xmlToJson(xml);
		// Atom 1.0 format
		if (json.entry && json.entry instanceof Array) {
			return json.entry;
		}
		// Atom 2.0 format
		else {
			return json.channel.item;
		}
	}

	function handleInput() {
		var currentResultHash, d, md, cats;

		currentInputValue = (searchInputEl.value + '').toLowerCase();
		if (!currentInputValue || currentInputValue.length < 3) {
			lastSearchResultHash = '';
			return;
		}
		searchResultsEl.style.offsetWidth;

		var matchingPosts = posts.filter(function (post) {
			// Search `description` and `content` both to support 1.0 and 2.0 formats.
			if ((post.title + '').toLowerCase().indexOf(currentInputValue) !== -1 || (post.categories + '').toLowerCase().indexOf(currentInputValue) !== -1 || ((post.description || post.content) + '').toLowerCase().indexOf(currentInputValue) !== -1) {
				return true;
			}
		});
		currentResultHash = matchingPosts.reduce(function(hash, post) { return post.title + hash; }, '');
		if (matchingPosts.length && currentResultHash !== lastSearchResultHash) {
			searchResultsEl.innerHTML = matchingPosts.map(function (post) {
				d = new Date(post.pubDate);
				md = new Date(post.modDate);
                if (post.categories == "[object Object]") {
                    cats = " ";
                }
                else {
                    cats = post.categories;
                }
				return '<article class="post" itemscope itemtype="http://schema.org/BlogPosting"> <header class="post-header"> <h1 class="post-title" itemprop="name headline"> <a href="' + post.link + '">' + post.title + '</a></h1><p class="post-meta-path">atom ~/.labnotes/' + post.filepath + '</p><p class="post-meta">Created: ' + d.toUTCString().replace(/.*(\d{2})\s+(\w{3})\s+(\d{4}).*/,'$2 $1, $3') + '&nbsp;&nbsp; Updated: ' +  md.toUTCString().replace(/.*(\d{2})\s+(\w{3})\s+(\d{4}).*/,'$2 $1, $3') + '&nbsp;&nbsp; ' + cats + '</p></header><div class="post-content" itemprop="articleBody">' + post.description + '</div> </article>';
			}).join('');
            searchResultsEl.innerHTML = '<p class="search-result-message">' + matchingPosts.length.toString() +  ' results for "' + currentInputValue + '": </p>' + searchResultsEl.innerHTML;
		}
        else {
            if (!matchingPosts.length) {
                searchResultsEl.innerHTML = '<p class="search-no-result-message">No results for "' + currentInputValue + '"</p>'
            }
        }
		lastSearchResultHash = currentResultHash;
	}

	function init(options) {
		searchFile = options.searchFile || searchFile;
		searchEl = document.querySelector(options.searchSelector || '#js-super-search');
		searchInputEl = document.querySelector(options.inputSelector || '#js-super-search__input');
		searchResultsEl = document.querySelector(options.resultsSelector || '#js-super-search__results');

		var xmlhttp=new XMLHttpRequest();
		xmlhttp.open('GET', searchFile);
		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState != 4) return;
			if (xmlhttp.status != 200 && xmlhttp.status != 304) { return; }
			var node = (new DOMParser).parseFromString(xmlhttp.responseText, 'text/xml');
			node = node.children[0];
			posts = getPostsFromXml(node);
		}
		xmlhttp.send();

		searchInputEl.addEventListener('keypress', function (e) {
            var key = e.which || e.keyCode;
            if (key === 13) { // 13 is enter
                handleInput();
            }
		});
	}

	window.superSearch = init;

})();
