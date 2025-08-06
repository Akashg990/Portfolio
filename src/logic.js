const element = document.querySelectorAll('.scroll-text');

const observer = new IntersectionObserver((entries)=>
{
    entries.forEach(entry=>
    {
        if(entry.isIntersecting)
        {
            entry.target.classList.add("show");
        };
    }
    )
});

element.forEach(el=>observer.observe(el));