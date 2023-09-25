document.addEventListener('DOMContentLoaded', function() {
    const contentList = document.getElementById('content-list');
    const contentEditor = document.getElementById('content-editor');
    
    // Sample data for content
    const contentData = [
        { id: 1, title: 'Introduction', body: 'This is the introduction content.' },
        { id: 2, title: 'About Us', body: 'Learn more about us here.' },
        // Add more content items as needed
    ];

    // Function to display content list
    function displayContentList() {
        contentList.innerHTML = '';
        contentData.forEach(content => {
            const listItem = document.createElement('div');
            listItem.classList.add('content-item');
            listItem.innerHTML = `<h3>${content.title}</h3>`;
            
            // Handle content item click to display editor
            listItem.addEventListener('click', () => displayContentEditor(content));
            contentList.appendChild(listItem);
        });
    }

    // Function to display content editor
    function displayContentEditor(content) {
        contentEditor.innerHTML = `
            <h2>Edit Content</h2>
            <form id="content-form">
                <input type="hidden" id="content-id" value="${content.id}">
                <label for="content-title">Title:</label>
                <input type="text" id="content-title" value="${content.title}" required>
                <label for="content-body">Body:</label>
                <textarea id="content-body" required>${content.body}</textarea>
                <button type="submit">Save</button>
            </form>
        `;
        
        const contentForm = document.getElementById('content-form');
        contentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const updatedContent = {
                id: content.id,
                title: document.getElementById('content-title').value,
                body: document.getElementById('content-body').value
            };
            
            // Update contentData with the new data
            const index = contentData.findIndex(item => item.id === updatedContent.id);
            if (index !== -1) {
                contentData[index] = updatedContent;
                displayContentList();
                contentEditor.innerHTML = ''; // Clear the editor
            }
        });
    }

    // Initial display of content list
    displayContentList();
});
