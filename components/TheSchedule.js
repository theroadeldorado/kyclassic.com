import Image from 'next/image';

const TheSchedule = ({ courses }) => {
  return (
    <div className="w-full py-20 bg-gray-50">
      <div className="container">
        <div className="px-10 mb-8 space-y-5 lg:px-0 lg:text-center lg:mb-16">
          <h2 className="text-4xl font-bold sm:text-5xl">Schedule of Events</h2>
          <p className="text-lg text-gray-600 w-ful sm:text-xl">Find information on the courses that will be played this year. Also </p>
        </div>
        <div className="flex flex-col space-y-12">
          {courses.map((course, index) => {
            return (
              <div className="grid overflow-hidden rounded-lg shadow-md lg:grid-cols-2" key={course.name}>
                <div className={'relative w-full h-full'}>
                  <Image src={`/images/${course.image}`} alt={course.name} layout="fill" objectFit="cover" />
                </div>
                <div className="flex flex-col items-start justify-center h-full py-12 pl-6 pr-6 space-y-4 bg-white lg:pl-14 lg:py-12">
                  <p className="inline-block w-auto px-3 pt-1 pb-[3px] mb-2 text-xs font-bold tracking-wider text-white uppercase bg-gray-900 rounded-full">{course.day}</p>
                  <h3 className="text-2xl font-semibold sm:text-4xl">{course.name}</h3>
                  <p className="text-lg text-left text-gray-900" x-html="course.teeTime"></p>
                  <div>
                    <p className="mb-1 text-xl font-semibold">Course Information</p>
                    <div className="flex items-center justify-start text-[14px] mb-2 space-x-4">
                      <div>
                        <span className="font-bold text-green-700">PAR:</span> <span>{course.par}</span>
                      </div>
                      <div>
                        <span className="font-bold text-green-700">YARDS:</span> <span>{course.length}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-start text-[14px] mb-2 space-x-4">
                      <div>
                        <span className="font-bold text-green-700">RATING:</span> <span>{course.rating}</span>
                      </div>
                      <div>
                        <span className="font-bold text-green-700">SLOPE:</span> <span>{course.slope}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    {course.eventOne && course.eventTwo && <p className="mb-1 text-xl font-semibold">Events</p>}
                    <div className="mb-2">{course.eventOne}</div>
                    <div className="mb-2">{course.eventTwo}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TheSchedule;
