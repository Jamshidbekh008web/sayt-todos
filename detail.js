let id = Number(window.location.href.split('=').at(-1))
const userEl = document.querySelector('.user')
console.log(userEl)

fetch('https://jsonplaceholder.typicode.com/todos/${id}')
	.then(response => response.json())

	.then(data => detailUi(data))
	.catch(err => console.log(err))

function detailUi(obj) {
	console.log(obj)

	userEl.innerHTML = `<div class="user-detail">
      <div class="profile">
        <div class="avatar">${obj.name[0]}</div>
        <div>
          <h1>${obj.name}</h1>
          <p>@${obj.username}</p>
        </div>
      </div>
      <div class="section">
        <h2>Contact Information</h2>
        <div class="info-grid">
          <div class="info">
            <span>Email</span>
            <p>${obj.email}</p>
          </div>
          <div class="info">
            <span>Phone</span>
            <p>${obj.phone}</p>
          </div>
          <div class="info">
            <span>Website</span>
            <p>${obj.wepsite}</p>
          </div>
        </div>
      </div>
      <div class="section">
        <h2>Address</h2>
        <div class="info-grid">
          <div class="info">
            <span>Street</span>
            <p>${obj.address.street}</p>
          </div>
          <div class="info">
            <span>Suite</span>
            <p>${obj.address.suite}</p>
          </div>
          <div class="info">
            <span>City</span>
            <p>${obj.address.city}</p>
          </div>
          <div class="info">
            <span>Zip Code</span>
            <p>${obj.address.zipcode}</p>
          </div>
        </div>
      </div>
      <div class="section">
        <h2>Company</h2>
        <div class="info-grid">
          <div class="info">
            <span>Company Name</span>
            <p>${obj.company.name}</p>
          </div>
          <div class="info">
            <span>Catch Phrase</span>
            <p>${obj.company.catchPhrase}</p>
          </div>
          <div class="info">
            <span>Business</span>
            <p>${obj.company.bs}</p>
          </div>
        </div>
      </div>
    </div>
    `
}
