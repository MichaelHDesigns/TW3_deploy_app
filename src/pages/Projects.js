import React, { useState, useEffect } from 'react';

// Load environment variables from the .env file
const GITHUB_PERSONAL_TOKEN = process.env.REACT_APP_GITHUB_PERSONAL_TOKEN;

function Projects() {
    const [repos, setRepos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const reposPerPage = 5;

    useEffect(() => {
        const fetchAllRepos = async () => {
            let allRepos = [];
            let page = 1;

            while (true) {
                try {
                    const response = await fetch(`https://api.github.com/users/MichaelHDesigns/repos?per_page=30&page=${page}`, {
                        headers: {
                            Authorization: `token ${GITHUB_PERSONAL_TOKEN}`
                        }
                    });

                    if (response.status === 401) {
                        console.error('Unauthorized access. Check your token.');
                        break;
                    }

                    if (!response.ok) {
                        console.error('Failed to fetch repos:', response.statusText);
                        break; // Stop fetching on error
                    }

                    const data = await response.json();

                    if (data.length === 0) break; // Stop if no more repos are returned

                    allRepos = [...allRepos, ...data];
                    page++;
                } catch (error) {
                    console.error('Error fetching repos:', error);
                    break;
                }
            }

            setRepos(allRepos);
        };

        fetchAllRepos();
    }, []);

    // Calculate the total number of pages
    const totalPages = Math.ceil(repos.length / reposPerPage);

    // Get current repos based on the current page
    const indexOfLastRepo = currentPage * reposPerPage;
    const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
    const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <section style={{
            background: '#000',
            width: '800px',
            borderRadius: '20px',
            padding: '20px',
            margin: '10px auto',
            maxWidth: '800px',
            boxShadow: '8px 8px 20px rgba(106, 90, 205, 0.5), -8px -8px 20px rgba(255, 255, 255, 0.5)',
            border: '2px solid rgba(106, 90, 205, 0.7)',
            textAlign: 'center',
            position: 'relative' // Enable positioning for child elements
        }}>
            <h2>Projects</h2>
            <img src="/devil.jpg" alt="Devil" style={{ width: '200px', borderRadius: '50%', marginBottom: '20px' }} />
            
            {/* Contributor logo and text */}
            <div style={{
                position: 'absolute',
                top: '15px',
                right: '20px',
                display: 'flex', // Use flexbox for horizontal layout
                alignItems: 'center' // Center vertically
            }}>
                <img 
                    src="https://avatars.githubusercontent.com/u/129417982?v=4" 
                    alt="Contributor" 
                    style={{ width: '25px', height: '25px', marginRight: '5px' }} // Add space between logo and text
                />
                <span style={{ fontSize: '14px' }}>Contributor</span>
            </div>

            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {currentRepos.map((repo) => (
                    <li key={repo.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '20px 0' }}>
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: '#6a5acd',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize: '18px',
                                marginBottom: '5px',
                                transition: 'color 0.3s ease',
                                backgroundColor: 'transparent', // Set initial background
                                padding: '5px 10px', // Add some padding for better hover effect
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.color = '#ffffff'; // Change text color to white on hover
                                e.target.style.backgroundColor = '#6a5acd'; // Change background color to purple on hover
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = '#6a5acd'; // Change text color back to purple
                                e.target.style.backgroundColor = 'transparent'; // Reset background color
                            }}
                        >
                            {repo.name}
                        </a>
                        <span style={{ fontSize: '16px' }}>
                            {repo.description || 'No description available'}
                        </span>
                    </li>
                ))}
            </ul>
            <div>
                <button
                    className="button"
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <button
                    className="button"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </section>
    );
}

export default Projects;