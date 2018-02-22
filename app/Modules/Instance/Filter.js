import Helpers from "../Helpers";

export default class {

    constructor(layout, settings) {

        this.layout = layout;
        this.settings = settings;

        if(!settings.filter)
            layout.children[1].classList.add('pillow-hidden');

        this.html = Helpers.createHTML(
            require('./../../Layouts/filter.pug'), {}
        );

        if(!settings.search)
            this.html.children[0].children[2].classList.add('pillow-hidden');

        layout.children[1].appendChild(this.html);

    }

    filtersList() {

        const listElement = Helpers.createHTML(
            require('./../../Layouts/filtersList.pug'), {}
        );

        const listWrapper = listElement.querySelector('.pillow-filters-wrapper');
        const itemElement = listWrapper.querySelector('.pillow-filter-item');

        this.settings.filterProperties.forEach(property => {

            const clone = itemElement.cloneNode();
            clone.innerText = property.title;
            clone.dataset.property = property.property;

            listWrapper.appendChild(clone);

        });

        listWrapper.removeChild(itemElement);
        this.html.querySelector('.pillow-filters-list').appendChild(listElement);

    }

}