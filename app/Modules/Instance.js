import Helpers from './Helpers'
import Torso from "./Instance/Torso";
import Header from "./Instance/Header";
import Filter from "./Instance/Filter";

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
        Helpers.translate(this.Element, this.Settings.locale);

    }

    createLayout() {

        // Compile torso
        this.Layout = new Torso(this.Settings.instanceAttributes);

        // Compile header
        new Header(this.Layout, this.Settings);

        // Compile filter
        const filter = new Filter(this.Layout, this.Settings);
        filter.filtersList();

        // Compile content

        // Compile item

        // Compile pagination

        this.Element.appendChild(this.Layout, this.Element);

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