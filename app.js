let audioList = document.getElementById("audioList");
let videoList = document.getElementById("videoList");

function updateDeviceList() {
    navigator.mediaDevices.enumerateDevices()
        .then(function (devices) {
            audioList.innerHTML = "";
            videoList.innerHTML = "";

            devices.forEach(function (device) {
                let elem = document.createElement("li");
                let [kind, type, direction] = device.kind.match(/(\w+)(input|output)/i);

                elem.innerHTML = "<strong>" + device.label + "</strong> (" + direction + ")";
                console.log(device.toJSON())
                if (type === "audio") {
                    audioList.appendChild(elem);
                } else if (type === "video") {
                    videoList.appendChild(elem);
                }
            });
        });
}

navigator.mediaDevices.ondevicechange = function (event) {
    updateDeviceList();
}




