import React from "react";

const TestPage = () => {
  return (
    <div className="flex flex-col gap-7 py-7">
      <ol className="mx-5 list-decimal">
        <li className="py-1">
          CRUD Operations:
          <ul className="list-disc px-5 py-2">
            <li>
              Create: HR professionals can easily add new asesors to the system,
              providing essential details such as personal information,
              qualifications, and contact details.
            </li>
            <li>
              Read: A dynamic and searchable interface enables quick access to
              detailed profiles of individual asesors.
            </li>
            <li>
              Update: HR administrators can efficiently modify and update asesor
              information, ensuring data accuracy and relevance.
            </li>
            <li>
              Delete: The system allows for the removal of obsolete or inactive
              asesors, maintaining a clean and up-to-date database.
            </li>
          </ul>
        </li>
        <li className="py-1">
          Statistical Insights:
          <ul className="list-disc px-5 py-2">
            <li>
              This project provides insightful statistics of the asesor data,
              offering HR professionals a comprehensive overview
            </li>
          </ul>
        </li>
        <li className="py-1">
          Advanced Filtering:
          <ul className="list-disc px-5 py-2">
            <li>
              Robust filtering options enable HR personnel to customize views
              based on specific criteria, enhancing the efficiency of data
              management.
            </li>
          </ul>
        </li>
        <li className="py-1">
          Responsive UI/UX Design:
          <ul className="list-disc px-5 py-2">
            <li>
              The user interface is designed to be intuitive and responsive,
              ensuring a seamless experience across different devices and screen
              sizes.
            </li>
            <li>
              Interactive elements enhance usability, making it easy for HR
              professionals to navigate and perform tasks efficiently.
            </li>
          </ul>
        </li>
      </ol>
      <div>
        <p>Technology Stack:</p>
        <ul className="list-disc px-5 py-2">
          <li>
            Frontend: React.js for a dynamic and responsive user interface.
          </li>
          <li>Backend: Node.js and Express.js for server-side development.</li>
          <li>Database: MongoDB for efficient and scalable data storage.</li>
          <li>Deployment: VPN for security.</li>
        </ul>
      </div>
      <div>
        Benefits: The Asesor Management System optimizes the HR workflow by
        providing a centralized and efficient platform for managing asesor data.
        With its intuitive interface, advanced features, and robust security
        measures, AMS empowers HR professionals to make informed decisions,
        maintain data accuracy, and enhance overall productivity in handling the
        workforce within the organization.
      </div>
    </div>
  );
};

export default TestPage;
