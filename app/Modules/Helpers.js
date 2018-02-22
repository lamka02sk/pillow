export default {

    createHTML(template, attributes = {}) {

        let element = document.querySelector('pillow-renderer');

        if(!element) {
            element = document.createElement('pillow-renderer');
            element.classList.add('pillow-hidden');
        }

        element.innerHTML = template;

        Object.keys(attributes).forEach(attribute => {
            element.setAttribute(
                attribute,
                element.hasAttribute(attribute)
                    ? element.getAttribute(attribute) + ' ' + attributes[attribute]
                    : attributes[attribute]
            );
        });

        return element.children[0];

    },

    translate(element, locale = {}) {

        Object.keys(locale).forEach(key => {

            const localeElements = document.querySelectorAll('[data-locale="' + key + '"]') || [];
            const placeholderElements = document.querySelectorAll('[data-placeholder="' + key + '"]') || [];
            const titleElements = document.querySelectorAll('[data-title="' + key + '"]') || [];

            localeElements.forEach(element => element.innerText = locale[key]);
            placeholderElements.forEach(element => element.placeholder = locale[key]);
            titleElements.forEach(element => element.title = locale[key]);

        });

    }

}