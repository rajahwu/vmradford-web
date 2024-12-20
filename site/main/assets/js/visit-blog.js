$(document).ready(function() {
    console.log('window.location.hostname:', window.location.hostname);
    const isLocalhost = window.location.hostname === 'localhost';
    const visitBlogButton = $('#visit-blog-btn');
    
    if (isLocalhost) {
        visitBlogButton.attr('href', 'http://localhost:4321/');
    } else {
        visitBlogButton.attr('href', 'https://vmradford-blog.netlify.app/');
    }

    visitBlogButton.attr('target', '_blank')
    .on('click', function() {
        window.open(visitBlogButton.attr('href'), '_blank');
        window.location.href = 'hire.html';
    });
});
