import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement, ArcElement } from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Wheat, Heart, TrendingUp, Globe, Leaf, Users } from 'lucide-react';
import './App.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement
);

function App() {
  // Chart data for global rice consumption
  const riceConsumptionData = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Global Rice Consumption (Million Tons)',
        data: [480, 485, 492, 498, 503, 508],
        borderColor: '#8B4513',
        backgroundColor: 'rgba(139, 69, 19, 0.2)',
        borderWidth: 3,
        tension: 0.4,
      },
    ],
  };

  // Nutritional content comparison
  const nutritionalData = {
    labels: ['Carbohydrates', 'Protein', 'Fiber', 'Iron', 'Magnesium', 'B Vitamins'],
    datasets: [
      {
        label: 'White Rice (%DV)',
        data: [28, 8, 2, 3, 6, 12],
        backgroundColor: 'rgba(245, 222, 179, 0.8)',
        borderColor: '#DAA520',
        borderWidth: 2,
      },
      {
        label: 'Brown Rice (%DV)',
        data: [23, 10, 14, 6, 21, 25],
        backgroundColor: 'rgba(139, 69, 19, 0.8)',
        borderColor: '#8B4513',
        borderWidth: 2,
      },
    ],
  };

  // Health benefits pie chart
  const healthBenefitsData = {
    labels: ['Digestive Health', 'Heart Health', 'Energy Boost', 'Weight Management', 'Brain Function'],
    datasets: [
      {
        data: [25, 22, 20, 18, 15],
        backgroundColor: [
          'rgba(34, 139, 34, 0.8)',
          'rgba(220, 20, 60, 0.8)',
          'rgba(255, 165, 0, 0.8)',
          'rgba(30, 144, 255, 0.8)',
          'rgba(138, 43, 226, 0.8)',
        ],
        borderColor: [
          '#228B22',
          '#DC143C',
          '#FFA500',
          '#1E90FF',
          '#8A2BE2',
        ],
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <Wheat className="hero-icon" />
          <h1 className="hero-title">Rice: The Foundation of Life</h1>
          <p className="hero-description">
            Discover the nutritional powerhouse that feeds over half the world's population and learn how rice improvement is revolutionizing global health and food security.
          </p>
        </div>
      </section>

      {/* About Rice Section */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <h2>Understanding Rice</h2>
            <p>Rice is more than just a staple food—it's a cultural cornerstone and nutritional foundation for billions worldwide.</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card global">
              <Globe className="feature-icon" />
              <h3>Global Staple</h3>
              <p>Rice provides 20% of the world's dietary energy supply and is the primary food for over 3.5 billion people across Asia, Africa, and Latin America.</p>
            </div>
            
            <div className="feature-card sustainable">
              <Leaf className="feature-icon" />
              <h3>Sustainable Crop</h3>
              <p>Modern rice cultivation techniques have improved water efficiency by 40% while increasing yields, making it a sustainable solution for food security.</p>
            </div>
            
            <div className="feature-card cultural">
              <Users className="feature-icon" />
              <h3>Cultural Heritage</h3>
              <p>With over 40,000 varieties cultivated across different regions, rice represents centuries of agricultural innovation and cultural adaptation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Consumption Trends */}
      <section className="chart-section">
        <div className="container">
          <div className="section-header">
            <h2>Global Rice Consumption Trends</h2>
            <p>Rice consumption continues to grow worldwide, reflecting its importance in global food security.</p>
          </div>
          
          <div className="chart-container">
            <div className="chart-wrapper">
              <Line data={riceConsumptionData} options={chartOptions} />
            </div>
          </div>
        </div>
      </section>

      {/* Nutritional Benefits */}
      <section className="nutrition-section">
        <div className="container">
          <div className="section-header">
            <h2>Nutritional Powerhouse</h2>
            <p>Compare the nutritional profiles of different rice varieties and discover their health benefits.</p>
          </div>

          <div className="nutrition-grid">
            <div className="nutrition-chart">
              <h3>Nutritional Comparison</h3>
              <div className="chart-wrapper">
                <Bar data={nutritionalData} options={chartOptions} />
              </div>
            </div>

            <div className="health-benefits">
              <div className="benefit-card heart">
                <Heart className="benefit-icon" />
                <h4>Heart Health</h4>
                <p>Brown rice contains compounds that help reduce cholesterol levels and support cardiovascular health through its high fiber and magnesium content.</p>
              </div>

              <div className="benefit-card energy">
                <TrendingUp className="benefit-icon" />
                <h4>Energy & Metabolism</h4>
                <p>Rice provides sustained energy release and B-vitamins essential for metabolism, making it ideal for active lifestyles and athletic performance.</p>
              </div>

              <div className="benefit-card digestive">
                <Leaf className="benefit-icon" />
                <h4>Digestive Wellness</h4>
                <p>The fiber content in brown rice promotes healthy digestion, while being naturally gluten-free makes it suitable for various dietary needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Benefits Distribution */}
      <section className="health-section">
        <div className="container">
          <div className="section-header">
            <h2>Health Improvement Areas</h2>
            <p>Research shows rice consumption contributes to various aspects of health and wellness.</p>
          </div>

          <div className="health-grid">
            <div className="pie-chart-container">
              <h3>Health Benefits Distribution</h3>
              <div className="chart-wrapper">
                <Pie data={healthBenefitsData} options={pieOptions} />
              </div>
            </div>

            <div className="research-findings">
              <div className="findings-card">
                <h4>Research Findings</h4>
                <ul className="findings-list">
                  <li>
                    <span className="bullet green"></span>
                    Studies show that brown rice consumption can reduce type 2 diabetes risk by up to 16%
                  </li>
                  <li>
                    <span className="bullet blue"></span>
                    Whole grain rice intake is associated with 20% lower cardiovascular disease risk
                  </li>
                  <li>
                    <span className="bullet purple"></span>
                    Rice-based diets show improved cognitive function in aging populations
                  </li>
                </ul>
              </div>

              <div className="future-improvements">
                <h4>Future Improvements</h4>
                <p>
                  Biofortification programs are developing rice varieties with enhanced vitamin A, iron, and zinc content, 
                  potentially reaching 1.5 billion people with improved nutrition by 2030.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="stats-section">
        <div className="container">
          <div className="section-header">
            <h2>Rice by the Numbers</h2>
            <p>Impressive statistics that showcase rice's global impact on nutrition and health.</p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">3.5B+</div>
              <div className="stat-label">People depend on rice daily</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">20%</div>
              <div className="stat-label">Of global caloric intake</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">40K+</div>
              <div className="stat-label">Rice varieties worldwide</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">508M</div>
              <div className="stat-label">Tons consumed annually</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <Wheat className="footer-icon" />
          <h3>Rice: Nourishing the Future</h3>
          <p>
            Through continued research, sustainable farming practices, and nutritional improvements, 
            rice remains central to global food security and human health advancement.
          </p>
          <div className="footer-credits">
            <p>&copy; 2025 Rice Improvement Initiative. Data sourced from FAO, WHO, and agricultural research institutions.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;