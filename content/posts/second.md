+++
Title = "Second"
Date = "2021-08-27T19:29:38-04:00"
LastMod = "05-05-2021"
Draft = false
Description = "second post"
FeaturedImage = ""
FeaturedImageDescription = ""
Tags = ["Development", "golang"]
Categories = ["Development", "GoLang", "idttwsbf", "i dont think that we should be friends", "duh data duh data duh datata duh"]
+++


# Front Matter
Hugo allows you to add front matter in yaml, toml, or json to your content files.
Front matter allows you to keep metadata attached to an instance of a content type—i.e., embedded inside a content file—and is one of the many features that gives Hugo its strength.


Front Matter Formats
Hugo supports four formats for front matter, each with their own identifying tokens.

TOML
identified by opening and closing +++.
YAML
identified by opening and closing ---.
JSON
a single JSON object surrounded by ‘{’ and ‘}’, followed by a new line.
ORG
a group of Org mode keywords in the format ‘#+KEY: VALUE’. Any line that does not start with #+ ends the front matter section. Keyword values can be either strings (#+KEY: VALUE) or a whitespace separated list of strings (#+KEY[]: VALUE_1 VALUE_2).
Example
yaml
 toml
 json

categories = ['Development', 'VIM']
date = '2012-04-06'
description = 'spf13-vim is a cross platform distribution of vim plugins and resources for Vim.'
slug = 'spf13-vim-3-0-release-and-new-website'
tags = ['.vimrc', 'plugins', 'spf13-vim', 'vim']
title = 'spf13-vim 3.0 release and new website'

Front Matter Variables
Predefined
There are a few predefined variables that Hugo is aware of. See Page Variables for how to call many of these predefined variables in your templates.

aliases
an array of one or more aliases (e.g., old published paths of renamed content) that will be created in the output directory structure . See Aliases for details.
audio
an array of paths to audio files related to the page; used by the opengraph internal template to populate og:audio.
cascade
a map of Front Matter keys whose values are passed down to the page’s descendents unless overwritten by self or a closer ancestor’s cascade. See Front Matter Cascade for details.
date
the datetime assigned to this page. This is usually fetched from the date field in front matter, but this behaviour is configurable.
description
the description for the content.
draft
if true, the content will not be rendered unless the --buildDrafts flag is passed to the hugo command.
expiryDate
the datetime at which the content should no longer be published by Hugo; expired content will not be rendered unless the --buildExpired flag is passed to the hugo command.
headless
if true, sets a leaf bundle to be headless.
images
an array of paths to images related to the page; used by internal templates such as _internal/twitter_cards.html.
isCJKLanguage
if true, Hugo will explicitly treat the content as a CJK language; both .Summary and .WordCount work properly in CJK languages.
keywords
the meta keywords for the content.
layout
the layout Hugo should select from the lookup order when rendering the content. If a type is not specified in the front matter, Hugo will look for the layout of the same name in the layout directory that corresponds with a content’s section. See “Defining a Content Type”
lastmod
the datetime at which the content was last modified.
linkTitle
used for creating links to content; if set, Hugo defaults to using the linktitle before the title. Hugo can also order lists of content by linktitle.
markup
experimental; specify "rst" for reStructuredText (requiresrst2html) or "md" (default) for Markdown.
outputs
allows you to specify output formats specific to the content. See output formats.
publishDate
if in the future, content will not be rendered unless the --buildFuture flag is passed to hugo.
resources
used for configuring page bundle resources. See Page Resources.
series
an array of series this page belongs to, as a subset of the series taxonomy; used by the opengraph internal template to populate og:see_also.
slug
appears as the tail of the output URL. A value specified in front matter will override the segment of the URL based on the filename.
summary
text used when providing a summary of the article in the .Summary page variable; details available in the content-summaries section.
title
the title for the content.
type
the type of the content; this value will be automatically derived from the directory (i.e., the section) if not specified in front matter.
url
the full path to the content from the web root. It makes no assumptions about the path of the content file. It also ignores any language prefixes of the multilingual feature.
videos
an array of paths to videos related to the page; used by the opengraph internal template to populate og:video.
weight
used for ordering your content in lists. Lower weight gets higher precedence. So content with lower weight will come first. If set, weights should be non-zero, as 0 is interpreted as an unset weight.
<taxonomies>
field name of the plural form of the index. See tags and categories in the above front matter examples. Note that the plural form of user-defined taxonomies cannot be the same as any of the predefined front matter variables.
