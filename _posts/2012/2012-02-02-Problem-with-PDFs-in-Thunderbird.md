---
title: Problem with PDFs in Thunderbird
date: 2012-02-02T14:10:36+00:00
layout: post
categories:
---
  * Solved problem with some pdf files not opening on crozier ('PDF file is damaged').  They are being corrupted by Thunderbird when the attachment is downloaded in chunks.  To solve I followed instructions posted in [this thread][1]:
    * In Thunderbird:
    * Go to: Tools / Options
    * Go to the "Advanced" tab
    * Click on "Config Editor"
    * Look for: mail.server.default.fetch_by_chunks
    * Click on it to change the default to "false"

    This won't fix files you've already attempted to open on crozier, but you can use the webmail interface (or Apple Mail on spore) to forward the message to yourself and the attachment in the email copy will open without problems.


[1]: http://getsatisfaction.com/mozilla_messaging/topics/why_does_thunderbird_corrupts_pdf_file_attachments
