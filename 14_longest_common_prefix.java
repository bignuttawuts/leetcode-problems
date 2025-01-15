class Solution {
    public String longestCommonPrefix(String[] strs) {
        Arrays.sort(strs);

        String first = strs[0];
        String last = strs[strs.length - 1];

        int count = Math.min(first.length(), last.length());
        StringBuffer longest = new StringBuffer();
        for (int i = 0; i < count; i++) {
            if (first.charAt(i) != last.charAt(i)) {
                return longest.toString();
            }
            longest.append(first.charAt(i));
        }

        return longest.toString();
    }
}
