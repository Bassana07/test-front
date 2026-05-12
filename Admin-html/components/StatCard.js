class StatCard extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const propriétaire = this.getAttribute('nom') || "nom";
        const valeur = this.getAttribute('valeur') || "0";
        const surface = this.getAttribute('surface') || "ha";
        const icone = this.getAttribute('icone') || "bi-bounding-box";
        this.innerHTML = `
            <div class="col-xl-4 col-sm-6">
                                <div class="card card-h-100">
                                    <div class="card-body d-flex align-items-center justify-content-around">
                                        <div class="h-48px w-50px position-relative d-flex justify-content-center align-items-center text-primary fs-4 rounded-3 shadow-lg border">
                                            <i class="bi bi-folder2-open"></i>
                                        </div>
                                        <div>
                                            <h3>$2,647 <i class="bi bi-graph-up-arrow text-success fw-normal fs-5"></i></h3>
                                            <span class="fs-5">Today's Sales</span>
                                            <p class="fs-12 mb-0">Sales Increment Rate</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
        `;
    }
}
customElements.define('stat-card', StatCard);