document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addButton = document.getElementById('add-button');
    const taskList = document.getElementById('task-list');

    // Olay dinleyicilerini kurar
    addButton.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskActions);

    // Görev ekleme fonksiyonu
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Lütfen bir görev girin!");
            return;
        }

        // Yeni liste öğesini oluştur
        const listItem = document.createElement('li');
        listItem.classList.add('task-item');

        // Görev metni
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        listItem.appendChild(taskSpan);

        // Silme butonu
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Sil';
        deleteButton.classList.add('delete-button');
        listItem.appendChild(deleteButton);

        // Listeye ekle
        taskList.appendChild(listItem);
        taskInput.value = ''; // Giriş alanını temizle
    }

    // Görev tamamlama (üstünü çizme) ve silme işlevlerini yönetir
    function handleTaskActions(e) {
        const target = e.target;

        // Görevi Silme
        if (target.classList.contains('delete-button')) {
            const listItem = target.closest('.task-item');
            taskList.removeChild(listItem);
        } 

        // Görevi Tamamlandı Olarak İşaretleme (Metne tıklanınca)
        else if (target.tagName === 'SPAN') {
            target.classList.toggle('completed');
        }
    }
});