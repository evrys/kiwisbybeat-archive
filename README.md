# kiwisbybeat-archive
  
WIP

This is an archive of the website and artistic works of webcomic artist [Ryan Armand](https://en.wikipedia.org/wiki/Ryan_Armand), hosted here: https://kiwisbybeat.netlify.com/

Ryan's domain registrations expired in Jan 2016 and [nobody knows what happened to him](https://www.reddit.com/r/comics/comments/44g0w5/kiwis_by_beat_website_down/). His comics were pretty important to me as a teenager (especially minus!) and I think it would be sad to let them fade from cultural history. Under the circumstances, I'm assuming that he would be okay with fans attempting to preserve public access to his work. If you are Ryan or have an idea of whether he's okay, feel free to [contact me](mailto:jaiden@mispy.me)!





## Archival methodology

- Downloaded mirror of https://web.archive.org/web/20160103202719/http://www.kiwisbybeat.com:80/ overnight using [wayback_machine_downloader](https://github.com/hartator/wayback-machine-downloader)
- The following string substitutions were made across all html pages using vscode search replace:
    - `http://www.kiwisbybeat.com/ => /`
    - `http://www.kiwisbybeat.com => /`
    - `�������̕��� => 金魚王国の崩壊`
    - `"www.nickstjohn.net/Home.html => "http://www.nickstjohn.net/Home.html`
- Broken image links from several comics were restored using the existing crowdsourced collection available at https://mega.nz/#F!xAI33KwI!9-dqzpWhZ1b-ohcsK6Mfzg!tUxTFBpA
- Converted all html files to utf-8 encoding using vim method at https://stackoverflow.com/a/35329638/1983739
- Archive published using static site host Netlify, configured for lossless image compression but no other asset processing