const jobs = [];
const job_list = document.querySelector("tbody");
const add_job = document.getElementById("add-job");
const remove_job = document.getElementById("remove-job");

add_job.addEventListener("click", () => {
    let job_data = document.getElementById("job-input").value;

    if (job_data) {
        jobs.push(job_data);

        job_list.innerHTML = "";

        jobs.forEach((job, index) => {
            const row = document.createElement("tr");

            const th = document.createElement("th");
            th.scope = "row";
            th.textContent = index + 1;

            const td = document.createElement("td");
            td.textContent = job;

            row.appendChild(th);
            row.appendChild(td);
            job_list.appendChild(row);
        });

        document.getElementById("job-input").value = "";
    }
});

remove_job.addEventListener("click", () => {
    let job_data = document.getElementById("job-input").value;

    if (job_data) {
        const index = jobs.indexOf(job_data);
        if (index > -1) {
            jobs.splice(index, 1);

            job_list.innerHTML = "";

            jobs.forEach((job, index) => {
                const row = document.createElement("tr");

                const th = document.createElement("th");
                th.scope = "row";
                th.textContent = index + 1; 

                const td = document.createElement("td");
                td.textContent = job; 

                row.appendChild(th);
                row.appendChild(td);
                job_list.appendChild(row);
            });

            document.getElementById("job-input").value = "";
        }
    }
});
