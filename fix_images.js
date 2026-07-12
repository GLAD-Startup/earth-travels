const fs = require('fs');

const replacements = {
  // Kashmir Luxury
  "https://images.unsplash.com/photo-1518344928340-7bfbb104b031?auto=format&fit=crop&w=800&q=80": "https://images.unsplash.com/photo-1571536802807-3cab2685cbac?auto=format&fit=crop&w=800&q=80",
  // Kashmir Winter (Taj Mahal replacement)
  "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80": "https://images.unsplash.com/photo-1622384771804-1f7dfbb44b20?auto=format&fit=crop&w=800&q=80",
  // Kerala
  "https://images.unsplash.com/photo-1562602833-0f4ab2fc46e5?auto=format&fit=crop&w=800&q=80": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=800&q=80",
  // Other broken ones
  "https://images.unsplash.com/photo-1573843981267-be1480dcd2f8?auto=format&fit=crop&w=800&q=80": "https://images.unsplash.com/photo-1506461883276-594543d0e408?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1559628376-f3fe5f782a2a?auto=format&fit=crop&w=800&q=80": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1524492412937-b28074a47d70?auto=format&fit=crop&w=800&q=80": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1529180979031-77c91e767ae1?auto=format&fit=crop&w=800&q=80": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1548625149-720434060bfe?auto=format&fit=crop&w=800&q=80": "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1494200483960-e87eb1aa0a72?auto=format&fit=crop&w=800&q=80": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1548813831-d1d4c0d59fb8?auto=format&fit=crop&w=800&q=80": "https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1548610762-b13a2cb97e80?auto=format&fit=crop&w=800&q=80": "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1527361107-5b35b38a4f8f?auto=format&fit=crop&w=800&q=80": "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1598025028163-a7c6d8b71827?auto=format&fit=crop&w=800&q=80": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80"
};

let content = fs.readFileSync('lib/data/packages.ts', 'utf8');

let replaced = 0;
for (const [oldUrl, newUrl] of Object.entries(replacements)) {
  if (content.includes(oldUrl)) {
    content = content.replace(oldUrl, newUrl);
    replaced++;
  }
}

fs.writeFileSync('lib/data/packages.ts', content, 'utf8');
console.log(`Replaced ${replaced} broken/incorrect images.`);
