class Singleton {
    /**
     * In JavaScript consider this method as the 'getInstance'
     */
    constructor() {
        this.value = null;

        if (Singleton.instance === undefined) {
            Singleton.instance = this;
        }
    }

    /**
     * @return {string}
     */
    getValue() {
        return Singleton.instance.value;
    }

    /**
     * @param {string} value
     * @return {void}
     */
    setValue(value) {
        Singleton.instance.value = value;
    }
}
