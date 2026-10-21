class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        const normalizedEmails = emails.map(email => {
            const [name, domain] = email.split('@')

            const normalizedName = name.split('+')[0].split('.').join('')

            return `${normalizedName}@${domain}`
        })

        return new Set(normalizedEmails).size
    }
}
