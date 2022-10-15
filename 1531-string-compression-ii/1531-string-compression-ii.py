class Solution:
    def getLengthOfOptimalCompression(self, s: str, k: int) -> int:
        @lru_cache(None)
        def dp(idx, last_char, last_char_count, k):
            if k < 0: 
                return float('inf')
            if idx == n: 
                return 0
            
            delete_char = dp(idx + 1, last_char, last_char_count, k - 1)
            if s[idx] == last_char:
                keep_char = dp(idx + 1, last_char, last_char_count + 1, k) + (last_char_count in [1, 9, 99])
            else:
                keep_char = dp(idx + 1, s[idx], 1, k) + 1
                
            return min(keep_char, delete_char)
        
        n = len(s)
        return dp(0, "", 0, k)