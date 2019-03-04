"use strict";
/**
 * @file Manages the configuration settings for the extension.
 * @author Vincent Bourdon @Evilznet
 */

 
exports.defaultConfiguration = {
    layout: '',
    title: 'title',
    // tslint:disable-next-line:object-literal-sort-keys
    logoImg: null,
    description: '',
    author: '',
    notesSeparator: 'note:',
    separator: '^[\r\n?|\n]---[\r\n?|\n]$',
    verticalSeparator: '^[\r\n?|\n]--[\r\n?|\n]$',
    customHighlightTheme: null,
    customTheme: null,
    controlsTutorial: true,
    controlsLayout: 'bottom-right',
    controlsBackArrows: 'faded',
    fragmentInURL: false,
    autoPlayMedia: false,
    defaultTiming: 120,
    display: 'block',
    theme: 'black',
    highlightTheme: 'Zenburn',
    controls: true,
    progress: true,
    slideNumber: false,
    history: true,
    keyboard: true,
    overview: true,
    center: true,
    touch: true,
    loop: false,
    rtl: false,
    shuffle: false,
    fragments: true,
    embedded: false,
    help: true,
    showNotes: false,
    autoSlide: 0,
    autoSlideMethod: 'Reveal.navigateNext',
    autoSlideStoppable: true,
    mouseWheel: false,
    hideAddressBar: true,
    previewLinks: false,
    transition: 'default',
    transitionSpeed: 'default',
    backgroundTransition: 'default',
    viewDistance: 3,
    parallaxBackgroundImage: '',
    parallaxBackgroundSize: '',
    parallaxBackgroundHorizontal: null,
    parallaxBackgroundVertical: null,
};
exports.loadConfiguration = (getExtensionConf) => {
    const loaded = getExtensionConf();
    // tslint:disable-next-line:no-object-literal-type-assertion
    return Object.assign({}, exports.defaultConfiguration, loaded);
};
