// 開啟彈出框
function openModal() {
    document.getElementById('modal').style.display = 'block';
}

// 關閉彈出框
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// 點擊外部區域關閉彈出框
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        closeModal();
    }
}
