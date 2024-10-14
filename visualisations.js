document.addEventListener('DOMContentLoaded', function() {
    var vg_population = "visualisation/map_visualisation_population.vg.json";
    vegaEmbed("#map_visualisation_population", vg_population, {
        renderer: "svg",
        actions: false
    }).then(function(result) {
    }).catch(console.error);

    var vg_vehicle = "visualisation/map_visualisation_vehicle.vg.json";
    vegaEmbed("#map_visual_vehicle", vg_vehicle, {
        renderer: "svg",
        actions: false
    }).then(function(result) {
    }).catch(console.error);

    var vg_slider = "visualisation/map_visualisation_slider.vg.json";
    vegaEmbed("#map_slider", vg_slider, {
        renderer: "svg",
        actions: false
    }).then(function(result) {
    }).catch(console.error);

    var vg_sankey = "visualisation/sankey_visualisation.vg.json";
    vegaEmbed("#sankey", vg_sankey, {
        renderer: "svg",
        actions: false
    }).then(function(result) {
    }).catch(console.error);

    var vg_heatmap = "visualisation/heatmap_visualisation.vg.json";
    vegaEmbed("#heatmap", vg_heatmap, {
        renderer: "svg",
        actions: false
    }).then(function(result) {
    }).catch(console.error);

    // var vg_sun = "visualisation/sunburst_visualisation.vg.json";
    // vegaEmbed("#sun", vg_sun, {
    //     renderer: "svg",
    //     actions: false
    // }).then(function(result) {
    // }).catch(console.error);

    // var vg_bubble = "visualisation/bubble_visualisation.vg.json";
    // vegaEmbed("#bubble", vg_bubble, {
    //     renderer: "svg",
    //     actions: false
    // }).then(function(result) {
    // }).catch(console.error);

    // var vg_treemap = "visualisation/treemap_visualisation.vg.json";
    // vegaEmbed("#treemap", vg_treemap, {
    //     renderer: "svg",
    //     actions: false
    // }).then(function(result) {
    // }).catch(console.error);

    var vg_linechart = "visualisation/linechart_visualisation.vg.json";
    vegaEmbed("#linechart", vg_linechart, {
        renderer: "svg",
        actions: false
    }).then(function(result) {
    }).catch(console.error);


    var vg_barchart = "visualisation/barchart_visualisation.vg.json";
    vegaEmbed("#barchart", vg_barchart, {
        renderer: "svg",
        actions: false
    }).then(function(result) {
    }).catch(console.error);
});