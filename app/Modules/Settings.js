export default class {

    constructor(settings = {}) {

        const keys = Object.keys(settings);
        this.setDefaults();

        keys.forEach(key => this[key] = settings[key]);

    }

    updateData(settings) {
        Object.keys(settings).forEach(key => this[key] = settings[key]);
    }

    setDefaults() {

        this.locale = {
            'pillow-collapse': 'Collapse',
            'pillow-collapse.open': 'Expand',
            'pillow-filters-empty': 'No filters active',
            'pillow-filters-clear': 'Reset filters',
            'pillow-filters-collapse': 'Filters',
            'pillow-filters-collapse.open': 'Expand filters',
            'pillow-filters-search': 'Find',
            'pillow-filters-none': 'There are no filters',
            'pillow-filters-title': 'Filter results by'
        };

        this.element = 'pillow-listing';
        this.instanceAttributes = {};

        this.search = true;
        this.searchAttributes = [];

        this.filter = true;
        this.filterProperties = [];     // Array []
        this.sortBy = [null, false];    // Property, Asc

        this.showHeader = false;
        this.instanceName = 'pillow';
        this.headerUrl = false;
        this.enableCollapse = false;

        // Items and data
        this.itemTemplate = false;
        this.data = {};
        this.addLinks = false;
        this.mapData = {
            item: {
                pairs: true,
                link: true
            }
        };

        // Pagination
        this.paginate = true;
        this.itemsNumber = 10;
        this.showPages = 5;

        // API
        this.api = false;
        this.apiUrl = '';
        this.apiKey = '';
        this.apiMethod = 'GET';
        this.apiData = {};
        this.apiParameters = {};
        this.apiProcess = true;
        this.apiParseResponse = () => {};

        // Events
        this.onRefresh = () => {};
        this.onCreate = () => {};
        this.onFilter = () => {};
        this.onDestroy = () => {};
        this.onSearch = () => {};
        this.onAPIResponse = () => {};
        this.onSort = () => {};
        this.onClick = () => {};
        this.onAdd = () => {};
        this.onRemove = () => {};
        this.onChange = () => {};
        this.onHover = () => {};

    }

}