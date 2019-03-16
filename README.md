# kiwisbybeat-archive

[![Netlify Status](https://api.netlify.com/api/v1/badges/de994cb4-38ef-43ef-9c65-34a1a4035ed7/deploy-status)](https://app.netlify.com/sites/kiwisbybeat/deploys)

This is an archive of the website and artistic works of webcomic artist [Ryan Armand](https://en.wikipedia.org/wiki/Ryan_Armand), hosted as a mirror site here: https://kiwisbybeat.netlify.com/

Ryan's domain registrations expired in Jan 2016 and [nobody knows what happened to him](https://www.reddit.com/r/comics/comments/44g0w5/kiwis_by_beat_website_down/). His comics were pretty important to me as a teenager (especially minus!) and I think it would be sad to let them fade from cultural history. Under the circumstances, I'm assuming that he would be okay with fans attempting to preserve public access to his work. If you are Ryan or have an idea of whether he's okay, please feel free to [contact me](mailto:jaiden@mispy.me)!

This archive is based heavily on the efforts of the existing mirror at http://kiwisbybeat.16mb.com/. However, as of the time of writing (9 Sep 2018) the postimg embeds on there were broken. My hope is that by drawing the collation together into a GitHub repository it will be more enduring, since anyone can then host their own mirror easily by forking or downloading the repo.

## Missing files

The archive.org copy of kiwisbybeat.com is incomplete. Most comics were recovered from other sources by fans in this [Mega folder](https://mega.nz/#F!xAI33KwI!9-dqzpWhZ1b-ohcsK6Mfzg!tUxTFBpA), but some remain an enigma.

I've included a script that will go through all the html files and list broken img tags, if you run `node listMissingImages.js`. These files are currently missing, if you are in possession of them please [let me know](mailto:jaiden@mispy.me), or send a pull request to add them:

```
www.kiwisbybeat.com/great/april3.jpg
www.kiwisbybeat.com/great/april1.jpg
www.kiwisbybeat.com/great/april2.jpg
www.kiwisbybeat.com/fist/fist49.png
www.kiwisbybeat.com/fist/fist50.png
www.kiwisbybeat.com/fist/fist51.png
www.kiwisbybeat.com/fist/fist52.png
www.kiwisbybeat.com/fist/fist53.png
www.kiwisbybeat.com/fist/fist54.png
www.kiwisbybeat.com/fist/fist55.png
www.kiwisbybeat.com/fist/fist56.png
www.kiwisbybeat.com/fist/fist57.png
www.kiwisbybeat.com/fist/fist58.png
www.kiwisbybeat.com/fist/fist59.png
www.kiwisbybeat.com/fist/fist60.png
www.kiwisbybeat.com/fist/fist61.png
www.kiwisbybeat.com/fist/fist62.png
www.kiwisbybeat.com/fist/fist63.png
www.kiwisbybeat.com/fist/fist64.png
www.kiwisbybeat.com/fist/fist65.png
www.kiwisbybeat.com/fist/fist66.png
www.kiwisbybeat.com/fist/fist67.png
www.kiwisbybeat.com/fist/fist68.png
www.kiwisbybeat.com/fist/fist69.png
www.kiwisbybeat.com/fist/fist70.png
www.kiwisbybeat.com/fist/fist71.png
www.kiwisbybeat.com/fist/fist72.png
www.kiwisbybeat.com/fist/fist73.png
www.kiwisbybeat.com/fist/fist74.png
www.kiwisbybeat.com/fist/fist75.png
www.kiwisbybeat.com/fist/fist76.png
www.kiwisbybeat.com/fist/fist77.png
www.kiwisbybeat.com/fist/fist78.png
www.kiwisbybeat.com/fist/fist79.png
www.kiwisbybeat.com/fist/fist80.png
www.kiwisbybeat.com/fist/fist81.png
www.kiwisbybeat.com/fist/fist82.png
www.kiwisbybeat.com/fist/fist83.png
www.kiwisbybeat.com/fist/fist84.png
www.kiwisbybeat.com/fist/fist85.png
www.kiwisbybeat.com/fist/fist86.png
www.kiwisbybeat.com/fist/fist87.png
www.kiwisbybeat.com/fist/fist88.png
www.kiwisbybeat.com/fist/fist89.png
www.kiwisbybeat.com/minus/prints2.jpg
www.kiwisbybeat.com/minus/prints3.jpg
www.kiwisbybeat.com/minus/prints6.jpg
www.kiwisbybeat.com/socks/page68.jpg
www.kiwisbybeat.com/socks/page69.jpg
www.kiwisbybeat.com/socks/page70.jpg
www.kiwisbybeat.com/socks/page71.jpg
www.kiwisbybeat.com/socks/page72.jpg
www.kiwisbybeat.com/socks/page73.jpg
www.kiwisbybeat.com/socks/page75.jpg
www.kiwisbybeat.com/socks/page76.jpg
www.kiwisbybeat.com/socks/page77.jpg
www.kiwisbybeat.com/socks/page78.jpg
www.kiwisbybeat.com/socks/page85.jpg
www.kiwisbybeat.com/socks/page86.jpg
www.kiwisbybeat.com/socks/page87.jpg
www.kiwisbybeat.com/socks/page88.jpg
www.kiwisbybeat.com/socks/page89.jpg
www.kiwisbybeat.com/socks/page90.jpg
www.kiwisbybeat.com/socks/page91.jpg
www.kiwisbybeat.com/socks/page92.jpg
www.kiwisbybeat.com/socks/page93.jpg
www.kiwisbybeat.com/socks/page94.jpg
www.kiwisbybeat.com/socks/page95.jpg
www.kiwisbybeat.com/socks/page96.jpg
www.kiwisbybeat.com/socks/page97.jpg
www.kiwisbybeat.com/socks/page99.jpg
www.kiwisbybeat.com/socks/page100.jpg
www.kiwisbybeat.com/socks/page101.jpg
www.kiwisbybeat.com/socks/page102.jpg
www.kiwisbybeat.com/socks/page103.jpg
www.kiwisbybeat.com/socks/page104.jpg
www.kiwisbybeat.com/socks/page105.jpg
www.kiwisbybeat.com/socks/page106.jpg
www.kiwisbybeat.com/socks/page107.jpg
www.kiwisbybeat.com/socks/page108.jpg
www.kiwisbybeat.com/socks/page109.jpg
www.kiwisbybeat.com/socks/page110.jpg
www.kiwisbybeat.com/socks/page111.jpg
www.kiwisbybeat.com/socks/page112.jpg
www.kiwisbybeat.com/socks/page113.jpg
www.kiwisbybeat.com/socks/page114.jpg
www.kiwisbybeat.com/socks/page115.jpg
www.kiwisbybeat.com/socks/page116.jpg
www.kiwisbybeat.com/socks/page117.jpg
www.kiwisbybeat.com/socks/page118.jpg
www.kiwisbybeat.com/socks/page119.jpg
www.kiwisbybeat.com/socks/page120.jpg
www.kiwisbybeat.com/socks/page121.jpg
www.kiwisbybeat.com/socks/page122.jpg
www.kiwisbybeat.com/socks/page123.jpg
www.kiwisbybeat.com/socks/page124.jpg
www.kiwisbybeat.com/socks/page125.jpg
www.kiwisbybeat.com/socks/page126.jpg
www.kiwisbybeat.com/socks/page127.jpg
www.kiwisbybeat.com/socks/page128.jpg
www.kiwisbybeat.com/socks/page10.jpg
www.kiwisbybeat.com/socks/page11.jpg
www.kiwisbybeat.com/socks/page12.jpg
www.kiwisbybeat.com/socks/page13.jpg
www.kiwisbybeat.com/socks/page14.jpg
www.kiwisbybeat.com/socks/page15.jpg
www.kiwisbybeat.com/socks/page16.jpg
www.kiwisbybeat.com/socks/page17.jpg
www.kiwisbybeat.com/socks/page18.jpg
www.kiwisbybeat.com/socks/page129.jpg
www.kiwisbybeat.com/socks/page130.jpg
www.kiwisbybeat.com/socks/page131.jpg
www.kiwisbybeat.com/socks/page132.jpg
www.kiwisbybeat.com/socks/page133.jpg
www.kiwisbybeat.com/socks/page134.jpg
www.kiwisbybeat.com/socks/page135.jpg
www.kiwisbybeat.com/socks/page136.jpg
www.kiwisbybeat.com/socks/page137.jpg
www.kiwisbybeat.com/socks/page138.jpg
www.kiwisbybeat.com/socks/page139.jpg
www.kiwisbybeat.com/socks/page140.jpg
www.kiwisbybeat.com/socks/page141.jpg
www.kiwisbybeat.com/socks/page142.jpg
www.kiwisbybeat.com/socks/page143.jpg
www.kiwisbybeat.com/socks/page144.jpg
www.kiwisbybeat.com/socks/page145.jpg
www.kiwisbybeat.com/socks/page146.jpg
www.kiwisbybeat.com/socks/page147.jpg
www.kiwisbybeat.com/socks/page148.jpg
www.kiwisbybeat.com/socks/page149.jpg
www.kiwisbybeat.com/socks/page150.jpg
www.kiwisbybeat.com/socks/page151.jpg
www.kiwisbybeat.com/socks/page152.jpg
www.kiwisbybeat.com/socks/page153.jpg
www.kiwisbybeat.com/socks/page154.jpg
www.kiwisbybeat.com/socks/page155.jpg
www.kiwisbybeat.com/socks/page156.jpg
www.kiwisbybeat.com/socks/page157.jpg
www.kiwisbybeat.com/socks/page158.jpg
www.kiwisbybeat.com/socks/page159.jpg
www.kiwisbybeat.com/socks/page160.jpg
www.kiwisbybeat.com/socks/page161.jpg
www.kiwisbybeat.com/socks/page162.jpg
www.kiwisbybeat.com/socks/page163.jpg
www.kiwisbybeat.com/socks/page165.jpg
www.kiwisbybeat.com/socks/page166.jpg
www.kiwisbybeat.com/socks/page167.jpg
www.kiwisbybeat.com/socks/page168.jpg
www.kiwisbybeat.com/socks/page169.jpg
www.kiwisbybeat.com/socks/page170.jpg
www.kiwisbybeat.com/socks/page171.jpg
www.kiwisbybeat.com/socks/page172.jpg
www.kiwisbybeat.com/socks/page173.jpg
www.kiwisbybeat.com/socks/page174.jpg
www.kiwisbybeat.com/socks/page175.jpg
www.kiwisbybeat.com/socks/page176.jpg
www.kiwisbybeat.com/socks/page177.jpg
www.kiwisbybeat.com/socks/page178.jpg
www.kiwisbybeat.com/socks/page179.jpg
www.kiwisbybeat.com/socks/page19.jpg
www.kiwisbybeat.com/socks/page20.jpg
www.kiwisbybeat.com/socks/page21.jpg
www.kiwisbybeat.com/socks/page22.jpg
www.kiwisbybeat.com/socks/page23.jpg
www.kiwisbybeat.com/socks/page180.jpg
www.kiwisbybeat.com/socks/page181.jpg
www.kiwisbybeat.com/socks/page182.jpg
www.kiwisbybeat.com/socks/page183.jpg
www.kiwisbybeat.com/socks/page184.jpg
www.kiwisbybeat.com/socks/page185.jpg
www.kiwisbybeat.com/socks/page186.jpg
www.kiwisbybeat.com/socks/page187.jpg
www.kiwisbybeat.com/socks/page188.jpg
www.kiwisbybeat.com/socks/page190.jpg
www.kiwisbybeat.com/socks/page191.jpg
www.kiwisbybeat.com/socks/page192.jpg
www.kiwisbybeat.com/socks/page193.jpg
www.kiwisbybeat.com/socks/page194.jpg
www.kiwisbybeat.com/socks/page195.jpg
www.kiwisbybeat.com/socks/page196.jpg
www.kiwisbybeat.com/socks/page197.jpg
www.kiwisbybeat.com/socks/page198.jpg
www.kiwisbybeat.com/socks/page199.jpg
www.kiwisbybeat.com/socks/page200.jpg
www.kiwisbybeat.com/socks/page201.jpg
www.kiwisbybeat.com/socks/page202.jpg
www.kiwisbybeat.com/socks/page203.jpg
www.kiwisbybeat.com/socks/page204.jpg
www.kiwisbybeat.com/socks/page205.jpg
www.kiwisbybeat.com/socks/page206.jpg
www.kiwisbybeat.com/socks/page207.jpg
www.kiwisbybeat.com/socks/page208.jpg
www.kiwisbybeat.com/socks/page209.jpg
www.kiwisbybeat.com/socks/page210.jpg
www.kiwisbybeat.com/socks/page211.jpg
www.kiwisbybeat.com/socks/page212.jpg
www.kiwisbybeat.com/socks/page213.jpg
www.kiwisbybeat.com/socks/page214.jpg
www.kiwisbybeat.com/socks/page215.jpg
www.kiwisbybeat.com/socks/page216.jpg
www.kiwisbybeat.com/socks/page217.jpg
www.kiwisbybeat.com/socks/page218.jpg
www.kiwisbybeat.com/socks/page219.jpg
www.kiwisbybeat.com/socks/page220.jpg
www.kiwisbybeat.com/socks/page221.jpg
www.kiwisbybeat.com/socks/page222.jpg
www.kiwisbybeat.com/socks/page223.jpg
www.kiwisbybeat.com/socks/page224.jpg
www.kiwisbybeat.com/socks/page225.jpg
www.kiwisbybeat.com/socks/page226.jpg
www.kiwisbybeat.com/socks/page227.jpg
www.kiwisbybeat.com/socks/page228.jpg
www.kiwisbybeat.com/socks/page229.jpg
www.kiwisbybeat.com/socks/page230.jpg
www.kiwisbybeat.com/socks/page231.jpg
www.kiwisbybeat.com/socks/page24.jpg
www.kiwisbybeat.com/socks/page25.jpg
www.kiwisbybeat.com/socks/page26.jpg
www.kiwisbybeat.com/socks/page27.jpg
www.kiwisbybeat.com/socks/page28.jpg
www.kiwisbybeat.com/socks/page29.jpg
www.kiwisbybeat.com/socks/page30.jpg
www.kiwisbybeat.com/socks/page31.jpg
www.kiwisbybeat.com/socks/page32.jpg
www.kiwisbybeat.com/socks/page33.jpg
www.kiwisbybeat.com/socks/page34.jpg
www.kiwisbybeat.com/socks/page35.jpg
www.kiwisbybeat.com/socks/page36.jpg
www.kiwisbybeat.com/socks/page37.jpg
www.kiwisbybeat.com/socks/page38.jpg
www.kiwisbybeat.com/socks/page39.jpg
www.kiwisbybeat.com/socks/page40.jpg
www.kiwisbybeat.com/socks/page41.jpg
www.kiwisbybeat.com/socks/page42.jpg
www.kiwisbybeat.com/socks/page43.jpg
www.kiwisbybeat.com/socks/page44.jpg
www.kiwisbybeat.com/socks/page45.jpg
www.kiwisbybeat.com/socks/page46.jpg
www.kiwisbybeat.com/socks/page47.jpg
www.kiwisbybeat.com/socks/page48.jpg
www.kiwisbybeat.com/socks/page49.jpg
www.kiwisbybeat.com/socks/page50.jpg
www.kiwisbybeat.com/socks/page51.jpg
www.kiwisbybeat.com/socks/page52.jpg
www.kiwisbybeat.com/socks/page53.jpg
www.kiwisbybeat.com/socks/page54.jpg
www.kiwisbybeat.com/socks/page55.jpg
www.kiwisbybeat.com/socks/page56.jpg
www.kiwisbybeat.com/socks/page57.jpg
www.kiwisbybeat.com/socks/page58.jpg
www.kiwisbybeat.com/socks/page59.jpg
www.kiwisbybeat.com/socks/page60.jpg
www.kiwisbybeat.com/socks/page61.jpg
www.kiwisbybeat.com/socks/page62.jpg
www.kiwisbybeat.com/socks/page63.jpg
www.kiwisbybeat.com/socks/page64.jpg
www.kiwisbybeat.com/socks/page65.jpg
www.kiwisbybeat.com/socks/page66.jpg
www.kiwisbybeat.com/socks/page67.jpg
www.kiwisbybeat.com/socks/ys1.jpg
www.kiwisbybeat.com/socks/ys2.jpg
www.kiwisbybeat.com/socks/ys3.jpg
www.kiwisbybeat.com/socks/s2.jpg
www.kiwisbybeat.com/socks/s3.jpg
www.kiwisbybeat.com/illu/mfs1.jpg
www.kiwisbybeat.com/illu/mfs2.png
```

The following files were incompletely recovered (lower resolution versions only):

```
www.kiwisbybeat.com/purul/pelen53.jpg
www.kiwisbybeat.com/purul/pelen54.jpg
www.kiwisbybeat.com/purul/pelen55.jpg
www.kiwisbybeat.com/purul/pelen56.jpg
www.kiwisbybeat.com/purul/pelen57.jpg
www.kiwisbybeat.com/purul/pelen58.jpg
```

I haven't (yet) attempted to preserve Ryan's earlier website/comic, Ribald Youth.

## Archival log

- Downloaded mirror of https://web.archive.org/web/20160103202719/http://www.kiwisbybeat.com:80/ overnight using [wayback_machine_downloader](https://github.com/hartator/wayback-machine-downloader)
- The following string substitutions were made across all html pages using vscode search replace:
    - `http://www.kiwisbybeat.com/ => /`
    - `http://www.kiwisbybeat.com => /`
    - `�������̕��� => 金魚王国の崩壊`
    - `"www.nickstjohn.net/Home.html => "http://www.nickstjohn.net/Home.html`
- Missing images from several comics were restored using the existing crowdsourced collection available at https://mega.nz/#F!xAI33KwI!9-dqzpWhZ1b-ohcsK6Mfzg!tUxTFBpA
- Converted all html files to utf-8 encoding using vim method at https://stackoverflow.com/a/35329638/1983739
- Archive published using static site host Netlify, configured for lossless image compression

## Things I learned from this project

The Internet Archive is an amazing resource and probably deserves a lot more funding than it gets. Though it's not infallible (as we can see from the missing content here), there are whole swathes of cultural history like this that are only publicly preserved at any level of completeness because of the efforts of that institution.

You can make specific queries to archive.org using [wayback_machine_downloader](https://github.com/hartator/wayback-machine-downloader). For example, you might download all jpg images from a site before a given timestamp: `-t 20160124132212 -o .jpg`.

git and GitHub are delightfully flexible tools for solving a wide variety of file manipulation, distribution and history-tracking problems beyond simply revision control for codebases. However, they do have their limits; using git for this is only easy because the archive is relatively small (<1GB).

The existing mirror shows there can be a lot of public interest and effort directed towards cultural archival in some cases. If general audiences had better access to more user-friendly tools with similar power like GitHub and Netlify, I think they could do even more awesome stuff.
