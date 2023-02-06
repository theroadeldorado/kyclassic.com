'use client';
import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'Code of Conduct',
    answer:
      'Participants are expected to exhibit respectful, honest and sportsmanlike behavior during the tournament and its related events. Any form of disrespectful conduct, either on or off the course, will not be tolerated and may result in disciplinary action. The primary objective of the tournament is to provide an enjoyable and friendly experience for all participants. If competition and winning take precedence over camaraderie and fun, this event may not be suitable for you. Kentucky Provisional/Guidelines',
  },
  {
    question: 'Tournament Format',
    answer:
      'Scoring will follow the standard format, with a match win earning 1 point and a halved match earning 1/2 point. In the event of a tied match, a tiebreaker will be determined. Singles are worth 1.5 points and play will continue until a winner is determined. In the event that the match is tied after singles, a players will be part of a 6 man alternate shot. Quickly pick the order and play will continue until one team wins a hole. Order cannot change. Start at first available hole',
  },
  {
    question: "Captain's Picks",
    answer:
      'Matchups will be selected by both captains, with each captain making individual selections and joint selections away from the group. Picks must be made immediately after dinner on both evenings. In the event of a delayed pick, the opponent may call a 2-minute warning and start the clock. If a pick is not made within the 2-minute time frame, the pick will be forfeited and the opponent will have the next match pick.',
  },
  {
    question: 'Pace of Play',
    answer:
      'Participants are expected to maintain pace with the group ahead and be ready to play at all times. If a player falls behind, they must pick up their pace to avoid holding up other players. Ball hunting is allowed up to 5 minutes, during which time the opponent is encouraged to assist in finding the ball. After 5 minutes, the opponent may enforce a 2-minute warning if the player has not given up the search and dropped the ball in the proper location. The 5-minute time frame includes the time to set up the drop determination and pre-swing routine.',
  },
  {
    question: 'Drops',
    answer:
      'The tournament will follow USGA rules regarding drops. If a ball cannot be found and it is unanimously agreed that it landed in play, a free drop may be taken, but only one per 18 holes is allowed. The free drop must be placed in the closest non-advantageous area to the agreed upon drop location. If one player has already taken his free drop then he must take a 1 stroke penalty.',
  },
  {
    question: 'Course Conditions & Ball Management',
    answer:
      'Participants are allowed to clean their ball at any time. The ball must be dropped back in its original location and may not be hand-placed. The ball may be fluffed in any lie using only a club. In bunkers, the ball may be played in a direct line away from the pin behind the bunker or directly in the bunker if the player chooses. This serves as the first draft of the agreed upon rules and guidelines.',
  },
];

export default function Example() {
  return (
    <div className="bg-gray-100" id="rules">
      <div className="px-6 py-24 mx-auto max-w-7xl sm:py-32 lg:py-40 lg:px-8">
        <div className="max-w-4xl mx-auto divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">The Rules</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="flex items-center ml-6 h-7">
                          {open ? <PlusSmallIcon className="w-6 h-6" aria-hidden="true" /> : <MinusSmallIcon className="w-6 h-6" aria-hidden="true" />}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="pr-12 mt-2">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
