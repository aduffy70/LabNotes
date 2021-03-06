---
title: Worrying about VPCsim usage quotas on Google AppEngine
date: 2013-01-29T13:22:27+00:00
layout: post
categories:
  - science ed vpcsim
  - ideas
---
  * Front-end instance hours are the only place where we have significant usage.  We get 28hrs free and on our highest usage days we were always below 14.
  * If we double the number of users will we potentially double this usage and exceed our quota?
    * I think probably not, but it IS possible.  We started being billed for this when the app receives a request and spins up, and continue to be billed for 15 minutes after the last request.  So if we got a request every 15 minutes we would get billed for a full 24 hours in a day.  It can go over 24 hrs in a day because if time to respond to requests becomes too great a second instance spins up and now we are accruing billable time twice as fast.  But even with many students using the system we shouldn't be sending too much traffic so latency should usually be low.  It is possible a number of users hitting the system in a short time could drive it up leading to multiple instances but it is unlikely this would continue over long periods of time.
    * We could play with the maximum number of allowed instances or the latency cutoff where new instances are started, but I am just as worried about what will happen if the system doesn't get responses from the webapp fast enough as I am about going over quotas.  I really need a way to get a whole bunch of users overdriving the system while I watch the latency values and instance counts to be able to make an intelligent guess at the best settings.
  * I had thought we could reduce the load on the system (or even eliminate the need for it all together) by making the code returned by the form actually contain the form data rather than just referring to a database record but that is not straightforward:
    * For the first page of the form this is possible - there are 4^4  *  14^5  = ~140,000,000 possible combinations.
    * The code is already a 13 digit number and we could encode this many choices in 9 characters.
    * Unfortunately the map section of the form has 8^2500 possible combinations.  Using base62 (alphanumeric with upper and lowercase) strings we could compress this somewhat but it would still be hundreds of characters long.
    * A possible partial solution is to give a code with embedded data in cases where they use the default map and only rely on the webapp for cases when they use the map.
    * Another problem with moving away from a webapp-served form with a database backend is the current settings view page and the species info page.  How much stuff can I embed in the javascript of the VPCsim page, and if I don't embed it there and instead serve it up from gemmae, will we start running into latency problems there?
