import Helpers from "../Helpers";

export default class {

    constructor(settings) {

        return Helpers.createHTML(
            require('./../../Layouts/layout.pug'), settings
        );

    }

}