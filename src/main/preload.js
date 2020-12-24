// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener("DOMContentLoaded", function () {
    var replaceText = function (selector, text) {
        var element = document.getElementById(selector);
        if (element) {
            element.innerText = text;
        }
    };
    for (var _i = 0, _a = ["chrome", "node", "electron"]; _i < _a.length; _i++) {
        var type = _a[_i];
        replaceText(type + "-version", process.versions[type]);
    }
});
console.log(12312312312312);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3ByZWxvYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0VBQWdFO0FBQ2hFLGlEQUFpRDtBQUNqRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUU7SUFDMUMsSUFBTSxXQUFXLEdBQUcsVUFBQyxRQUFnQixFQUFFLElBQVk7UUFDakQsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQyxDQUFDO0lBRUYsS0FBbUIsVUFBOEIsRUFBOUIsTUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxFQUE5QixjQUE4QixFQUE5QixJQUE4QixFQUFFO1FBQTlDLElBQU0sSUFBSSxTQUFBO1FBQ2IsV0FBVyxDQUFJLElBQUksYUFBVSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBb0MsQ0FBQyxDQUFDLENBQUM7S0FDeEY7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBbGwgb2YgdGhlIE5vZGUuanMgQVBJcyBhcmUgYXZhaWxhYmxlIGluIHRoZSBwcmVsb2FkIHByb2Nlc3MuXG4vLyBJdCBoYXMgdGhlIHNhbWUgc2FuZGJveCBhcyBhIENocm9tZSBleHRlbnNpb24uXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCByZXBsYWNlVGV4dCA9IChzZWxlY3Rvcjogc3RyaW5nLCB0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LmlubmVyVGV4dCA9IHRleHQ7XG4gICAgfVxuICB9O1xuXG4gIGZvciAoY29uc3QgdHlwZSBvZiBbXCJjaHJvbWVcIiwgXCJub2RlXCIsIFwiZWxlY3Ryb25cIl0pIHtcbiAgICByZXBsYWNlVGV4dChgJHt0eXBlfS12ZXJzaW9uYCwgcHJvY2Vzcy52ZXJzaW9uc1t0eXBlIGFzIGtleW9mIE5vZGVKUy5Qcm9jZXNzVmVyc2lvbnNdKTtcbiAgfVxufSk7XG5jb25zb2xlLmxvZygxMjMxMjMxMjMxMjMxMik7Il19