var core;
(function (core) {
    class Contact {
        // private instance members
        m_fullName;
        m_contactNumber;
        m_emailAddress;
        // public properties (getters and setters)
        get FullName() {
            return this.m_fullName;
        }
        set FullName(fullName) {
            this.m_fullName = fullName;
        }
        get ContactNumber() {
            return this.m_contactNumber;
        }
        set ContactNumber(contactNumber) {
            this.m_contactNumber = contactNumber;
        }
        get EmailAddress() {
            return this.m_emailAddress;
        }
        set EmailAddress(emailAddress) {
            this.m_emailAddress = emailAddress;
        }
        // constructor
        constructor(fullName = "", contactNumber = "", emailAddress = "") {
            this.m_fullName = fullName;
            this.m_contactNumber = contactNumber;
            this.m_emailAddress = emailAddress;
        }
        // public methods
        /**
         * This method converts the object's properties to a comma-separated string
         *
         * @returns {(string | null)}
         */
        serialize() {
            if (this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== "") {
                return `${this.FullName},${this.ContactNumber},${this.EmailAddress}`;
            }
            else {
                console.error("One or more properties of the Contact are missing or empty");
                return null;
            }
        }
        /**
         * This method separates the data string parameter into the object's properties
         *
         * @param {string} data
         * @returns {void}
         */
        deserialize(data) {
            let propertyArray = data.split(",");
            this.FullName = propertyArray[0];
            this.ContactNumber = propertyArray[1];
            this.EmailAddress = propertyArray[2];
        }
        // public overrides
        /**
         * This method overrides the built-in toString method
         * and returns a string that contains the values of the object's properties
         * @override
         * @returns {string}
         */
        toString() {
            return `Full Name     : ${this.FullName}\nContact Number: ${this.ContactNumber}\nEmail Address : ${this.EmailAddress}`;
        }
    }
    core.Contact = Contact;
})(core || (core = {}));
