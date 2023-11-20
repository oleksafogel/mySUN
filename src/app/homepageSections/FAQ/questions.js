import Accordion from 'react-bootstrap/Accordion';
import { AccordionItem } from "react-bootstrap";

import './questions.css';

const questions = [
  `What is “mySUN” and how does it work?`,
  `What features does the app offer in first release?`,
  `Is the app free?`,
  `Will the app be available on both iOS and Android?`,
  `How can I create an account in the app?`,
  `How accurate is a calculation in the mySUN app?`,
  `Can I track my progress over time?`,
  `Does the mySUN app offer personalized recommendations for reducing my nature footprint?`,
  `How can I interact with other users?`,
  `Can I suggest new features or improvements to the app?`
]

const Questions = () => {
  return (
      <Accordion className="questions">
        {questions.map((question, index) => (
          <AccordionItem key={index} eventKey={index} className="accordion-item">
            <Accordion.Header>{question}</Accordion.Header>
            <Accordion.Body>
              {(() => {
                switch(index) {
                  case 0:
                    return (
                      <>
                        <p>
                          “mySUN” is a mobile application that enables users to track their nature footprint and make eco-friendly choices in their daily lives.
                        </p>
                        <p>
                          The app works by allowing users to automatically track their daily activities and estimate their nature footprint production based on their lifestyle choices. Besides, the users can fill in the questionnaire on their daily commute, energy usage, diet, purchases, and other factors that impact their nature footprint. The app then provides recommendations to help users make more sustainable choices.
                        </p>
                      </>
                    );
                  case 1:
                    return (
                      <>
                        <p>The app offers various features, including:</p>
                          <ul>
                            <li>Questionnaire: The app evaluates the amount of nature footprint emissions that the user produces by analyzing their lifestyle activities, such as transportation, energy use, food consumption, and shopping activities.</li>
                            <li>Nature footprint tracking: The app can automatically track users’ nature footprint based on their daily commute activities like walking, running, cycling, driving, etc.</li>
                            <li>Tips and recommendations: The app provides tips and recommendations on how to live a more sustainable lifestyle.</li>
                            <li>Events: The app provides a list of events related to ecology that take place in Canada. The users can join the events and make a contribution to reducing the nature footprint production.</li>
                            <li>Friends: Users can connect with like-minded individuals and watch them reduce their nature footprint.</li>
                          </ul>
                      </>
                    );
                  case 2:
                    return (
                      <p>
                        Yes, the app is free to download and use.
                      </p>
                    );
                  case 3:
                    return (
                      <p>
                        Currently, the app available only on iOS devices, but we hope to expand to other platforms in the future.
                      </p>
                    );
                  case 4:
                    return (
                      <p>
                        To create an account in the app, you will need to once create a unique username for the app to remember your device. Next time the app will let you in without requesting any additional information.
                      </p>
                    );
                  case 5:
                    return (
                      <p>
                        The nature footprint calculation in the mySUN app is based on industry-standard formulas and data sources and is designed to provide an estimate of your nature footprint. The accuracy of the calculation may depend on the correctness of automatically tracked data on user transportation, thus the estimates are not always 100% accurate.
                      </p>
                    );
                  case 6:
                    return (
                      <p>
                        Yes, the app allows users to refill the questionnaire over time and see how their nature footprint changes based on their lifestyle choices.
                      </p>
                    );
                  case 7:
                    return (
                      <p>
                        Yes, the mySUN app offers personalized recommendations based on your answers provided in the questionnaire. These recommendations can help you make eco-friendly choices and reduce your nature footprint over time.
                      </p>
                    );
                  case 8:
                    return (
                      <p>
                        The mySUN app has a feature that allows users to interact with other like-minded individuals to learn their nature footprint score and watch them reduce it over time.
                      </p>
                    );
                  case 9:
                    return (
                      <p>
                        Yes, the app welcomes feedback and suggestions for new features and improvements. Users can submit their ideas through the app's feedback form.
                      </p>
                    );
                  default:
                    return null;
                }
              })()}
            </Accordion.Body>
          </AccordionItem>
        ))}
      </Accordion>
  );
}

export default Questions;