
import axios from 'axios';

var apiUrl = "https://api.camptocamp.org"

var result = {

    documentType : {
        a:"area",
        c:"article",
        b:"book",
        i:"image", //todo
        m:"map",
        o:"outing",
        r:"route",
        u:"profile",
        w:"waypoint",
        x:"xreport"
    },

    documentsGeoLocalization: [
        "routes",
        "waypoints",
        "profiles",
        "outings",
        "images",
        "xreports"
    ],

    getSmallImageUrl(image){
        return 'https://media.camptocamp.org/c2corg_active/' + image.filename.replace('.', 'MI.').replace('.svg', '.jpg')
    },

    getImageUrl(image){
        return 'https://media.camptocamp.org/c2corg_active/' + image.filename
    },

    search(params){
        return axios.get(apiUrl + '/search', {params})
    },

    getRecentChanges(params){
        return axios.get(apiUrl + '/documents/changes', {params})
    },

    getHistory(document_id, lang){
        return axios.get(apiUrl + '/document/' + document_id + '/history/' + lang)
    }
};

["area", "article", "book", "image", "map", "outing", "profile", "route", "waypoint", "xreport"].forEach(type => {

    result[type + "s"] = {
        get:function(params){
            return axios.get(apiUrl + '/' + type + 's', {params})
        }
    }

    result[type] = {
        get:function(id){
            return axios.get(apiUrl + '/' + type + 's/' + id)
        }
    }

})

export default result;
