import Helpers from "../Helpers";

export default class {

    constructor(layout, settings) {

        if(!settings.showHeader)
            layout.children[0].classList.add('pillow-hidden');

        const html = Helpers.createHTML(
            require('./../../Layouts/header.pug')
        );

        if(settings.headerUrl) {
            html.children[0].setAttribute('href', settings.headerUrl);
            html.children[0].setAttribute('target', '_blank');
            html.children[0].setAttribute('rel', 'noopener');
        }

        html.children[0].children[0].textContent = settings.instanceName;

        if(!settings.enableCollapse)
            html.children[1].classList.add('pillow-hidden');

        layout.children[0].appendChild(html);

    }

}