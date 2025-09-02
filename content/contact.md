+++
title = "Contact"
+++

For research collaborations, questions about my work, or general interesting discussions, feel free to reach out.

- **Email**: <span id="email-contact"></span>
- **Social & academic profiles**:
  - [Google Scholar](https://scholar.google.com/citations?user=uekwkvYAAAAJ)
  - [GitHub](https://github.com/guerrantif)
  - [LinkedIn](https://www.linkedin.com/in/filippoguerranti/)
  - [Twitter/X](https://x.com/guerrantif)
- **Interests**:
  - Machine learning (in general) for structured data (in particular)
  - Endurance sports and training
  - (Science-based) life optimization

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