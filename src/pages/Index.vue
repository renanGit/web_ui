<template>
  <q-page class="flex flex-center">

    <q-list bordered padding class="rounded-borders q-my-xl">

      <q-item>
        <q-item-section>
          <q-card>
            <q-card-section>
              <div class="text-h6 doc-card-title">Profile</div>
            </q-card-section>
            <q-separator/>
            <q-card-section>
              <div class="row justify-between">
                <div class="col-4">
                  <div class="text-weight-light text-h6">
                    About Me
                  </div>
                  <q-separator spaced/>
                  <div>
                    Passionate about self improvement, values good team dynamics,
                    can prioritize several tasks, and leverages experienced folks for
                    help when needed.
                  </div>
                </div>
                <div style="width: 200px">
                  <q-avatar size="200px">
                    <img :src="'/statics/face.jpg'" />
                  </q-avatar>
                </div>
                <div class="col-4">

                  <div class="text-weight-light text-h6">
                    Details
                  </div>
                  <q-separator spaced/>

                  <div class="row">
                    <div class="col-3 text-weight-bold">Name:</div>
                    <div class="col-9">Renan L. Santana</div>
                  </div>
                  <div class="row">
                    <div class="col-3 text-weight-bold">Location:</div>
                    <div class="col-9"><div class="fas fa-map-marker-alt"/> Portland, OR</div>
                  </div>
                  <q-separator spaced/>

                  <div class="row items-center">
                    <div class="col-3 text-weight-bold">Git:</div>
                    <div class="col">
                      <q-btn
                        type="a"
                        href="https://github.com/renanGit"
                        target="_blank"
                        color="primary"
                        size="sm"
                        icon="fab fa-github"
                        label="Github"
                      />
                    </div>
                  </div>

                  <div class="row items-center q-my-md">
                    <div class="col-3 text-weight-bold">LinkedIn:</div>
                    <div class="col">
                      <q-btn
                        type="a"
                        href="https://www.linkedin.com/in/renanls/"
                        target="_blank"
                        color="primary"
                        size="sm"
                        icon="fab fa-linkedin"
                        label="LinkedIn"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <q-separator spaced/>

              <div class="row justify-center q-my-lg">
                <q-card>
                  <q-card-section>
                    <div class="text-weight-light text-h5">Inspirational Quotes</div>
                    <q-separator spaced/>
                  </q-card-section>
                  <q-card-section>
                    <div class="row text-weight-light text-h6">
                      "Life evolves to fit its surroundings."
                    </div>
                    <div class="row">-Charles Darwin</div>
                    <q-separator spaced/>
                  </q-card-section>
                  <q-card-section>
                    <div class="row text-weight-light text-h6">
                      "If you want to go fast, go alone. If you want to go far, go together."
                    </div>
                    <div class="row">-African Proverb</div>
                  </q-card-section>
                </q-card>
              </div>
            </q-card-section>
          </q-card>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section>
          <q-card>
            <q-card-section>
              <div class="text-h6 doc-card-title">Work Experience</div>
            </q-card-section>
            <q-separator/>

            <q-card-section>
              <div class="row justify-between">
                <div class="col text-weight-bold">Intel</div>
                <div class="col text-weight-bold text-right">Portland, OR</div>
              </div>

              <div class="row justify-between">
                <div class="col text-italic">Software Engineer</div>
                <div class="col text-italic text-right">August 2017 - Present</div>
              </div>

              <div class="row">
                <div class="col-12">
                  <q-list>
                    <q-item>
                      <q-item-section>
                        <q-item-label class="text-italic">Keywords</q-item-label>
                        <q-item-label>
                          <q-chip dense outline color="primary" text-color="white">Python</q-chip>
                          <q-chip dense outline color="primary" text-color="white">Django</q-chip>
                          <q-chip dense outline color="primary" text-color="white">REST</q-chip>
                          <q-chip dense outline color="primary" text-color="white">Vue</q-chip>
                          <q-chip dense outline color="primary" text-color="white">Oracle</q-chip>
                          <q-chip dense outline color="primary" text-color="white">Jenkins</q-chip>
                          <q-chip dense outline color="primary" text-color="white">
                            Project Management
                          </q-chip>
                          <q-chip dense outline color="primary" text-color="white">Linux</q-chip>
                          <q-chip dense outline color="primary" text-color="white">
                            Silicon Manufactoring
                          </q-chip>
                        </q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-separator spaced inset />

                    <q-item>
                      <q-item-section>
                        Led the development of a full-stack web application from
                        scratch to increase the visibility for Tapeout projects
                        and its progress to 40+ internal stakeholders.
                      </q-item-section>
                    </q-item>
                    <q-separator spaced inset />

                    <q-item>
                      <q-item-section>
                        Pursued my passion on self improvement and iteratively
                        seeking better solutions.
                      </q-item-section>
                    </q-item>
                    <q-separator spaced inset />

                    <q-item>
                      <q-item-section>
                        Collaborated with the main stakeholders to showcase and
                        brainstorm features and its implementations.
                      </q-item-section>
                    </q-item>
                    <q-separator spaced inset />

                    <q-item>
                      <q-item-section>
                        Collaborated with several types of teams around the
                        world to generate data for photomask fabrication, this
                        is called Tapeout (example products ICELAKE & TIGERLAKE).
                      </q-item-section>
                    </q-item>
                  </q-list>
                </div>
              </div>
            </q-card-section>

            <q-card-section>
              <div class="row justify-between">
                <div class="col text-weight-bold">Lockheed Martin</div>
                <div class="col text-weight-bold text-right">Orlando, FL</div>
              </div>
              <div class="row justify-between">
                <div class="col text-italic">Software Engineer (secret clearance)</div>
                <div class="col text-italic text-right">June 2016 - July 2017</div>
              </div>

              <div class="row">
                <div class="col-12">
                  <q-list>
                    <q-item>
                      <q-item-section>
                        <q-item-label class="text-italic">Keywords</q-item-label>
                        <q-item-label>
                          <q-chip dense outline color="primary" text-color="white">Java</q-chip>
                          <q-chip dense outline color="primary" text-color="white">XHTML</q-chip>
                          <q-chip dense outline color="primary" text-color="white">JUnit</q-chip>
                          <q-chip dense outline color="primary" text-color="white">
                            Hibernation
                          </q-chip>
                          <q-chip dense outline color="primary" text-color="white">Agile</q-chip>
                          <q-chip dense outline color="primary" text-color="white">JBoss</q-chip>
                          <q-chip dense outline color="primary" text-color="white">Oracle</q-chip>
                        </q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-separator spaced inset />

                    <q-item>
                      <q-item-section>
                        Developed front-end XHTML code and coded the requirements
                        for the Java backend.
                      </q-item-section>
                    </q-item>
                    <q-separator spaced inset />

                    <q-item>
                      <q-item-section>
                        Collaborated with QA engineers to spearhead reported
                        defects from different parts of the system, involved
                        handling issues with the backend business logic, data
                        integrity, and frontend presentation.
                      </q-item-section>
                    </q-item>
                    <q-separator spaced inset />

                    <q-item>
                      <q-item-section>
                        Practiced agile development methodologies.
                      </q-item-section>
                    </q-item>
                  </q-list>
                </div>
              </div>
            </q-card-section>

            <q-card-section>
              <div class="row justify-between">
                <div class="col text-weight-bold">Lockheed Martin</div>
                <div class="col text-weight-bold text-right">Orlando, FL</div>
              </div>
              <div class="row justify-between">
                <div class="col text-italic">Software Engineer Intern</div>
                <div class="col text-italic text-right">May 2015 - August 2015</div>
              </div>
              <div class="row">
                <div class="col-12">
                  <q-list>
                    <q-item>
                      <q-item-section>
                        <q-item-label class="text-italic">Keywords</q-item-label>
                        <q-item-label>
                          <q-chip dense outline color="primary" text-color="white">Java</q-chip>
                          <q-chip dense outline color="primary" text-color="white">XHTML</q-chip>
                          <q-chip dense outline color="primary" text-color="white">JUnit</q-chip>
                          <q-chip dense outline color="primary" text-color="white">
                            Hibernation
                          </q-chip>
                          <q-chip dense outline color="primary" text-color="white">Agile</q-chip>
                          <q-chip dense outline color="primary" text-color="white">JBoss</q-chip>
                          <q-chip dense outline color="primary" text-color="white">Oracle</q-chip>
                        </q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-separator spaced inset />

                    <q-item>
                      <q-item-section>
                        Responsible for the requirements analysis, software
                        design, and development of the Joint Strike Fighter
                        Training Management System notification center.
                      </q-item-section>
                    </q-item>

                  </q-list>
                </div>
              </div>
            </q-card-section>

            <q-card-section>
              <div class="row justify-between">
                <div class="col text-weight-bold">Florida International University</div>
                <div class="col text-weight-bold text-right">Miami, FL</div>
              </div>
              <div class="row justify-between">
                <div class="col text-italic">Undergraduate Research Assistant</div>
                <div class="col text-italic text-right">November 2014 - May 2015</div>
              </div>
              <div class="row">
                <div class="col-12">
                  <q-list>
                    <q-item>
                      <q-item-section>
                        <q-item-label class="text-italic">Keywords</q-item-label>
                        <q-item-label>
                          <q-chip dense outline color="primary" text-color="white">Java</q-chip>
                          <q-chip dense outline color="primary" text-color="white">Agile</q-chip>
                          <q-chip dense outline color="primary" text-color="white">
                            RubyOnRails
                          </q-chip>
                          <q-chip dense outline color="primary" text-color="white">D3</q-chip>
                        </q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-separator spaced inset />

                    <q-item>
                      <q-item-section>
                        Utilized a graphing API to construct and embed a
                        real-time graphing utility from scratch for SlingShot,
                        in-order, for the logistics gathered from the network
                        simulation be more orderly presentable.
                      </q-item-section>
                    </q-item>
                    <q-separator spaced inset />

                    <q-item>
                      <q-item-section>
                        Assisted a Graduate student to construct a web
                        application to build a network topology using APIs and
                        add requested features in the D3 visualization.
                      </q-item-section>
                    </q-item>
                    <q-separator spaced inset />

                    <q-item>
                      <q-item-section>
                        Attended the 22nd Geni Engineering Conference in
                        Washington, DC.
                      </q-item-section>
                    </q-item>

                  </q-list>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section>
          <q-card>
            <q-card-section>
              <div class="text-h6 doc-card-title">Education</div>
            </q-card-section>
            <q-separator/>

            <q-card-section>
              <div class="row justify-between">
                <div class="col text-weight-bold">Florida International University (FIU)</div>
                <div class="col text-weight-bold text-right">Miami, FL</div>
              </div>
              <div class="row justify-between">
                <div class="col text-italic">Bachelors of Science in Computer Science, 3.4 GPA</div>
                <div class="col text-italic text-right">Fall 2012 - Spring 2016</div>
              </div>
              <div class="row text-italic text-caption">
                School involvement: Participated in programming competition
                practice sessions. Member of ACM and Upsilon Pi Epsilon.
              </div>
            </q-card-section>

          </q-card>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section>
          <q-card>
            <q-card-section>
              <div class="text-h6 doc-card-title">Technical Skills</div>
            </q-card-section>
            <q-separator/>

            <q-splitter :value="50" disable>
              <template v-slot:before>
                <q-list>
                  <q-item v-for="row in skills.slice(0, skills.length / 2)" :key="row.lang">
                    <q-item-section>
                      <div class="row items-center">
                        <div class="col-3 items-center">{{ row.lang }}</div>
                        <q-rating class="col-9"
                          readonly
                          :value="row.stars"
                          size="1.5em"
                          :max="10"
                          color="primary"
                          icon="fas fa-star"
                        />
                      </div>
                    </q-item-section>
                  </q-item>
                </q-list>
              </template>

              <template v-slot:after>
                <q-list>
                  <q-item v-for="row in skills.slice(skills.length / 2, skills.length)"
                    :key="row.lang"
                  >
                    <q-item-section>
                      <div class="row items-center">
                        <div class="col-3 items-center">{{ row.lang }}</div>
                        <q-rating class="col-9"
                          readonly
                          :value="row.stars"
                          size="1.5em"
                          :max="10"
                          color="primary"
                          icon="fas fa-star"
                        />
                      </div>
                    </q-item-section>
                  </q-item>
                </q-list>
              </template>
            </q-splitter>

          </q-card>
        </q-item-section>
      </q-item>

    </q-list>

  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      skills: [
        { lang: 'Python', stars: 10 },
        { lang: 'Git', stars: 9 },
        { lang: 'Django', stars: 8 },
        { lang: 'HTML', stars: 8 },
        { lang: 'Java', stars: 8 },
        { lang: 'CSS', stars: 7 },
        { lang: 'Linux', stars: 7 },
        { lang: 'Vue', stars: 7 },
        { lang: 'Oracle', stars: 7 },
        { lang: 'Postgres', stars: 7 },
        { lang: 'MySQL', stars: 7 },
        { lang: 'JavaScript', stars: 6 },
        { lang: 'Graphql', stars: 6 },
        { lang: 'REST', stars: 6 },
        { lang: 'C', stars: 6 },
        { lang: 'C#', stars: 6 },
        { lang: 'C++', stars: 6 },
        { lang: 'Jenkins', stars: 6 },
        { lang: 'Mongo', stars: 5 },
        { lang: 'XHTML', stars: 4 },
        { lang: 'Hibernate', stars: 4 },
        { lang: 'JUnit', stars: 4 },
        { lang: 'JBoss', stars: 3 },
        { lang: 'Octave', stars: 3 },
      ],
    };
  },
};
</script>

<style>
.doc-card-title{
  margin-left:-27px;
  padding:2px 10px 2px 24px;
  background:#e0e0e0;
  color:#616161;
  position:relative;
  border-radius:3px 5px 5px 0
}
.doc-card-title:after{
  content:"";
  position:absolute;
  top:100%;
  left:0;
  width:0;
  height:0;
  border:0 solid transparent;
  border-top-color:#bebebe;
  border-width:9px 0 0 11px
}
</style>
