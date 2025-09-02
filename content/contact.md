+++
title = "contact"
+++

for research collaborations, questions about my work, or general interesting discussions, feel free to reach out.

**email**: <span id="email-contact"></span>

**social & academic profiles**:
- [google scholar](https://scholar.google.com/citations?user=uekwkvYAAAAJ)
- [github](https://github.com/guerrantif)
- [linkedin](https://www.linkedin.com/in/filippoguerranti/)
- [twitter/x](https://x.com/guerrantif)

**interests**:

- machine learning (in general) for structured data (in particular)
- endurance sports and training
- (science-based) life optimization


<script>
// Enhanced email obfuscation to prevent scraping
(function() {
    // Base64 encoded email parts with simple character shifting
    const parts = [102, 103]; // 'f' and 'g'
    const domain = [102, 105, 108, 105, 112, 112, 111, 103, 117, 101, 114, 114, 97, 110, 116, 105]; // filippoguerranti
    const tld = [99, 111, 109]; // com
    
    // Build email with obfuscation
    const user = String.fromCharCode(...parts);
    const domainStr = String.fromCharCode(...domain);
    const tldStr = String.fromCharCode(...tld);
    const email = user + String.fromCharCode(64) + domainStr + String.fromCharCode(46) + tldStr;
    
    // Insert with delay to avoid immediate scraping
    setTimeout(() => {
        const element = document.getElementById('email-contact');
        if (element) {
            const link = document.createElement('a');
            link.href = 'mailto:' + email;
            link.textContent = email;
            element.appendChild(link);
        }
    }, 150);
})();
</script>