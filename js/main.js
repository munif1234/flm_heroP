const milestoneData = JSON.parse(data).data;

function load() {
  const milestones = document.querySelector('.milestones');
  milestones.innerHTML = `${milestoneData.map(function(milestone) {
    return `<div class="milestones">
              <div class="milestone border-b">
                <div class="flex">
                  <div class="checkbox"><input type="checkbox" /></div>
                  <div>
                    <p>
                      ${milestone.name}
                      <span><i class="fas fa-chevron-down"></i></span>
                    </p>
                  </div>
                </div>
                ${milestone.modules.map((module) => {
                  return `<div class="hidden_panel">
                                    <div class="module border-b">
                                      <p>${module.name}</p>
                                    </div>
                                  </div>`
                }).join('')}
              </div>
            </div>`
  }).join('')}`
}

load()