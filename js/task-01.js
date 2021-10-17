const list = document.querySelectorAll(".item")
console.log('Number of categories:', list.length)

const categorys = document.querySelectorAll(".item h2")
for (const category of categorys) {

    console.log(`Category: ${category.textContent}`)
    console.log(`Elements:${category.nextElementSibling.children.length}`)
}


