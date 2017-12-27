import Helpers from './Helpers'

export default class {

    /**
     * @param core instanceof Core
     * @param element
     */
    constructor(core, element) {

        this.Core = core;
        this.Settings = core.settings;
        this.Element = element;
        this.Layout = null;

        this.createLayout();

    }

    _createTorso() {

        this.Layout = Helpers.createHTML(
            require('./../Layouts/layout.pug'), this.Settings.instanceAttributes
        );

    }

    _createHeader() {

        if(!this.Settings.showHeader)
            this.Layout.children[0].classList.add('pillow-hidden');

        const html = Helpers.createHTML(
            require('./../Layouts/header.pug')
        );

        if(this.Settings.headerUrl) {
            html.children[0].setAttribute('href', this.Settings.headerUrl);
            html.children[0].setAttribute('target', '_blank');
            html.children[0].setAttribute('rel', 'noopener');
        }

        html.children[0].children[0].textContent = this.Settings.instanceName;

        if(!this.Settings.enableCollapse)
            html.children[1].classList.add('pillow-hidden');

        this.Layout.children[0].appendChild(html);

    }

    createLayout() {

        // Compile torso
        this._createTorso();

        // Compile header
        this._createHeader();

        // Compile filer

        // Compile filter list

        // Compile content

        // Compile item

        // Compile pagination

        this.Element.parentNode.replaceChild(this.Layout, this.Element);

    }

    setAPI(settings) {



    }

    refresh() {



    }

    showPage(page) {

        

    }

    destroy(reinitialize) {



    }

}