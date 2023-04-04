import Head from 'next/head'
import Image from 'next/image'
import { Sulphur_Point, Roboto, Rubik } from 'next/font/google'
import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend,
ArcElement,
RadialLinearScale,
PointElement,
LineElement,
Filler
} from 'chart.js';
import {
Grid3,
Message,
Calculator,
Flash,
Setting3,
Danger,
TrendUp,
NotificationBing,
ArrowSquareDown, SearchNormal, I3Square
} from 'iconsax-react';
import { Bar, Doughnut, Radar } from 'react-chartjs-2';
import styles from '@/styles/Home.module.css';
import logo from '@/public/logo.svg';
import profilePicture from '@/public/pfp.jpg';
import avatar1 from '@/public/avatar1.jpg';
import avatar2 from '@/public/avatar2.jpg';

const sulphurPoint = Sulphur_Point({ subsets: ['latin'], weight: ['700', '400'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['700'] })
const rubik = Rubik({ subsets: ['latin'], weight: ['400'] })

ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend,
ArcElement,
RadialLinearScale,
PointElement,
LineElement,
Filler
);

export default function Home() {
  return <>
    <Head>
      <title>Mockup</title>
      <meta name="viewport" content="width=device-width, initial-scale=2.0" />
    </Head>

    <div className={[styles.layoutContainer, sulphurPoint.className].join(' ')}>
      <aside className={styles.aside}>
        <div className={styles.logo}>
          <Image src={logo} alt='Logo' />
          <div className={styles.logoText}>
            <h2>Realply</h2>
          </div>
        </div>

        <div className={styles.menuOptionsTop}>
          <div className={[styles.menuOption, 'active'].join(' ')}>
            <Grid3 size={20} />
            <h6>Dashboard</h6>
            <div className={styles.menuOptionHighlight} />
          </div>

          <div className={styles.menuOption}>
            <Message size={20} />
            <h6>Messages</h6>
            <div className={styles.menuOptionHighlight} />
          </div>

          <div className={styles.menuOption}>
            <Calculator size={20} />
            <h6>Calendar</h6>
            <div className={styles.menuOptionHighlight} />
          </div>

          <div className={styles.menuOption}>
            <Flash size={20} />
            <h6>Campaigns</h6>
            <div className={styles.menuOptionHighlight} />
          </div>
        </div>

        <div className={styles.menuOptionsBottom}>
          <div className={styles.menuOption}>
            <Setting3 size={20} />
            <h6>Settings</h6>
            <div className={styles.menuOptionHighlight} />
          </div>

          <div className={styles.menuOption}>
            <Danger size={20} />
            <h6>Help?</h6>
            <div className={styles.menuOptionHighlight} />
          </div>
        </div>

        <div className={styles.freeTrialAlert}>
          <h5 className={roboto.className}>Your free trial is about to end in</h5>
          <h4 className={roboto.className}>10 days.</h4>
          <p>You will not be billed during your free trial.</p>
          <p>To keep your projects running after the trial end, upgrade to a paid option.</p>
          <button className={roboto.className}>Upgrade</button>
        </div>

        <div className={styles.logOut}>
          <div className={styles.menuOption}>
            {/* Necessary as iconsax-react is missing send-square */}
            <svg width="20" height="20" viewBox="0 0 24 24" stroke="#F8F8F8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 9.51001L12 6.51001L15 9.51001" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 6.51001V14.51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 16.51C9.89 17.81 14.11 17.81 18 16.51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h6>Log out</h6>
            <div className={styles.menuOptionHighlight} />
          </div>
        </div>
      </aside>

      <main className={styles.main}>
        <div className={styles.mainLeft}>
          <h3 className={styles.dashboardTitle}>
            Dashboard
          </h3>

          <div className={styles.summaryStats}>
            <div className={styles.summaryStat}>
              <div>
                <h6 className={styles.statName}>Connections</h6>
                <h5 className={[styles.statNumber, rubik.className].join(' ')}>2632</h5>
              </div>
              <div className={styles.statBadge}>
                <TrendUp size={16} />
                <p>56%</p>
              </div>
            </div>

            <div className={styles.statDivider} />

            <div className={styles.summaryStat}>
              <div>
                <h6 className={styles.statName}>Followers</h6>
                <h5 className={[styles.statNumber, rubik.className].join(' ')}>2667</h5>
              </div>
              <div className={styles.statBadge}>
                <TrendUp size={16} />
                <p>0%</p>
              </div>
            </div>

            <div className={styles.statDivider} />

            <div className={styles.summaryStat}>
              <div>
                <h6 className={styles.statName}>Connected Invites</h6>
                <h5 className={[styles.statNumber, rubik.className].join(' ')}>100</h5>
              </div>
              <div className={styles.statBadge}>
                <TrendUp size={16} />
                <p>60%</p>
              </div>
            </div>
          </div>

          <div className={styles.barChartContainer}>
            <div className={styles.barChart}>
              <Bar
                data={{
                  labels: ['', '', ''],
                  datasets: [{
                    data: [450, 290, 750],
                    backgroundColor: ['#C2ECC1', '#1F1F1F', '#C5C7F6'],
                    hoverBackgroundColor: ['#C2ECC1', '#1F1F1F', '#C5C7F6']
                  }]
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    x: { display: false },
                    y: {
                      grid: { tickLength: 0 },
                      max: 800,
                      ticks: {
                        padding: 15,
                        color: '#94979A',
                        font: { family: '\'__Sulphur_Point_cce74e\', \'__Sulphur_Point_Fallback_cce74e\'', size: 12 }
                      }
                    }
                  },
                  plugins: { legend: { display: false }, tooltip: { enabled: false } }
                }}
              />
            </div>

            <div className={styles.chartKey}>
              <div className={styles.keyCategory}>
                <div className={[styles.keyColor, styles.bgAccentGreen].join(' ')} />
                <div className={styles.keyLabel}>
                  Connections
                </div>
              </div>

              <div className={styles.keyCategory}>
                <div className={[styles.keyColor, styles.bgAccentDark].join(' ')} />
                <div className={styles.keyLabel}>
                  Follows
                </div>
              </div>

              <div className={styles.keyCategory}>
                <div className={[styles.keyColor, styles.bgAccentPurple].join(' ')} />
                <div className={styles.keyLabel}>
                  Connect Invites
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.mainRight}>
          <div className={styles.header}>
            <div className={styles.searchContainer}>
              <div className={styles.search}>
                <div className={styles.searchText}>Search</div>
                <SearchNormal size={18} />
              </div>
            </div>
            <NotificationBing size={20} />
            <Image src={profilePicture} alt='Profile picture' />
            <h6>Jacob Frost</h6>
            <ArrowSquareDown size={18} />
          </div>

          <div className={styles.campaignAnalytics}>
            <div className={styles.sectionTitle}>
              <h4>Campaign Analytics</h4>
              <div className={styles.titleBadge}>
                <Calculator size={14} />
                <div>Mar 10 - Apr 10</div>
                <ArrowSquareDown size={14} />
              </div>
            </div>

            <div className={styles.analyticGroup}>
              <div className={styles.analytic}>
                <div className={styles.analyticName}>Invitations sent</div>
                <div className={styles.analyticNumber}>286</div>
              </div>

              <div className={styles.analytic}>
                <div className={styles.analyticName}>Pending invitations</div>
                <div className={styles.analyticNumber}>12</div>
              </div>

              <div className={styles.analytic}>
                <div className={styles.analyticName}>Profile views</div>
                <div className={styles.analyticNumber}>2891</div>
              </div>
            </div>

            <div className={styles.analyticsCharts}>
              <div className={styles.analyticsChart}>
                <div className={styles.analyticsChartInner}>
                  <div className={styles.doughnutContainer}>
                    <Doughnut
                      data={{
                        labels: ['', '', ''],
                        datasets: [{
                          data: [4, 6, 4],
                          backgroundColor: ['#C5C7F6', '#C2ECC1', '#1F1F1F'],
                          hoverBackgroundColor: ['#C5C7F6', '#C2ECC1', '#1F1F1F'],
                          borderWidth: 0,
                          rotation: 350,
                        }]
                      }}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        cutout: '60%',
                        plugins: { legend: { display: false }, tooltip: { enabled: false } }
                      }}
                    />
                  </div>
                </div>

                <div className={styles.legend}>
                  <div className={[styles.legendData, roboto.className].join(' ' )}>
                    <div className={[styles.legendBullet, styles.bgAccentDark].join(' ')} />
                    <div className={styles.legendTitle}>Invitations sent</div>
                    <div className={styles.legendNumber}>286</div>
                  </div>

                  <div className={[styles.legendData, roboto.className].join(' ' )}>
                    <div className={[styles.legendBullet, styles.bgAccentGreen].join(' ')} />
                    <div className={styles.legendTitle}>Pending invitations</div>
                    <div className={styles.legendNumber}>12</div>
                  </div>

                  <div className={[styles.legendData, roboto.className].join(' ' )}>
                    <div className={[styles.legendBullet, styles.bgAccentPurple].join(' ')} />
                    <div className={styles.legendTitle}>Profile views</div>
                    <div className={styles.legendNumber}>2891</div>
                  </div>
                </div>
              </div>

              <div className={styles.analyticsChart}>
                <div className={styles.analyticsChartInner}>
                  <div className={styles.radarContainer}>
                    <Radar
                      data={{
                        labels: Array.from(Array(7), (_, i) => new Date(2000, i).toLocaleString('default', { month: 'long' })),
                        datasets: [{
                          label: '',
                          data: [60, 20, 40, 10, 60, 50, 50],
                          fill: true,
                          backgroundColor: 'rgba(197, 199, 246, 0.3)',
                          hoverBackgroundColor: 'rgba(197, 199, 246, 0.3)',
                          borderColor: '#C5C7F6',
                          borderWidth: 1,
                          pointRadius: 1,
                          pointHoverRadius: 1
                        },
                          {
                            label: '',
                            data: [40, 70, 60, 40, 10, 80, 73],
                            backgroundColor: 'rgba(194, 236, 193, 0.3)',
                            hoverBackgroundColor: 'rgba(194, 236, 193, 0.3)',
                            borderColor: '#C2ECC1',
                            borderWidth: 1,
                            pointRadius: 1,
                            pointHoverRadius: 1
                          }]
                      }}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: { legend: { display: false }, tooltip: { enabled: false } },
                        scales: { r: {
                            ticks: {
                              color: '#00000061',
                              font: {
                                family: '\'__Sulphur_Point_cce74e\', \'__Sulphur_Point_Fallback_cce74e\'',
                                size: 7
                              }
                            },
                            min: 0
                          } },
                      }}
                    />
                  </div>
                </div>

                <div className={styles.legend}>
                  <div className={[styles.legendData, roboto.className].join(' ' )}>
                    <div className={[styles.legendBullet, styles.bgAccentGreenTranslucent].join(' ')} />
                    <div className={styles.legendTitle}>Campaign 1</div>
                    <div className={styles.legendNumber}>12,423</div>
                  </div>

                  <div className={[styles.legendData, roboto.className].join(' ' )}>
                    <div className={[styles.legendBullet, styles.bgAccentPurpleTranslucent].join(' ')} />
                    <div className={styles.legendTitle}>Campaign 2</div>
                    <div className={styles.legendNumber}>12,423</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.recentActivity}>
            <div className={styles.sectionTitle}>
              <h4>Recent Activity</h4>
              <div className={styles.titleBadge}>
                <div>Last <b>24h</b></div>
                <ArrowSquareDown size={14} />
              </div>
            </div>

            <div className={styles.activityFeedContainer}>
              <div className={styles.activityFeed}>
                <div className={styles.activity}>
                  <Image src={avatar1} alt='Avatar 1' />
                  <div><b>Alex Morgan</b> sent you a <b>message</b>.</div>
                </div>

                <div className={styles.activity}>
                  <Image src={avatar2} alt='Avatar 2' />
                  <div><b>Mujo Prosper</b> sent you a <b>connection request</b>.</div>
                </div>

                <div className={styles.activity}>
                  <div className={styles.activityIcon}>
                    <I3Square size={18} />
                  </div>
                  <div>Upcoming Task - <b>Create a campaign for designers</b> due on <b>02/04/2023</b>.</div>
                </div>

                <div className={styles.activity}>
                  <Image src={avatar1} alt='Avatar 1' />
                  <div><b>Alex Morgan</b> sent you a <b>message</b>.</div>
                </div>

                <div className={styles.activity}>
                  <Image src={avatar2} alt='Avatar 2' />
                  <div><b>Mujo Prosper</b> sent you a <b>connection request</b>.</div>
                </div>

                <div className={styles.activity}>
                  <div className={styles.activityIcon}>
                    <I3Square size={18} />
                  </div>
                  <div>Upcoming Task - <b>Create a campaign for designers</b> due on <b>02/04/2023</b>.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </>
}