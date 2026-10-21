class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        const normalizedEmails = emails.map(email => {
            const [name, domain] = email.split('@')

            const normalizedName = name.split('.').join('').split('+')[0]

            return `${normalizedName}@${domain}`
        })

        return new Set(normalizedEmails).size
    }
}
