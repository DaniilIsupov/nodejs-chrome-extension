/*global chrome*/

console.log('background');

//example of using a message handler from the content scripts
chrome.extension.onMessage.addListener(async (request, sender, sendResponse) => {
    switch (request.msg) {
        default:
            break;
    }
});
