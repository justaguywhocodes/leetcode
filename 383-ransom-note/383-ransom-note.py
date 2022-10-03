class Solution(object):
    def canConstruct(self, ransomNote, magazine):
        if len(ransomNote) > len(magazine): return False
        
        magazine_counts = collections.Counter(magazine)
        ransom_note_counts = collections.Counter(ransomNote)
        
        for char,count in ransom_note_counts.items():
            magazine_count = magazine_counts[char]
            if magazine_count < count:
                return False
            
        return True