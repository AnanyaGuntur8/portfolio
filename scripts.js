function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('hidden');
}


function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
function flipCard(card) {
    card.classList.toggle('flipped');
}

function openSidePanel(infoId) {
    var sidePanel = document.getElementById('sidePanel');
    var panelInfos = document.getElementsByClassName('panel-info');
    for (var i = 0; i < panelInfos.length; i++) {
        panelInfos[i].style.display = 'none';
    }
    document.getElementById(infoId).style.display = 'block';
    sidePanel.style.width = '500px';
}

function closeSidePanel() {
    document.getElementById('sidePanel').style.width = '0';
}