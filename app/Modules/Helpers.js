export default {

    createHTML(template, attributes = {}) {

        const html = new DOMParser().parseFromString(
            template,
            'text/xml'
        ).children[0];

        Object.keys(attributes).forEach(attribute => {
            html.setAttribute(
                attribute,
                html.hasAttribute(attribute)
                    ? html.getAttribute(attribute) + ' ' + attributes[attribute]
                    : attributes[attribute]
            );
        });

        return html;

    }

}