var express = require('express');
var router = express.Router();

/* GET articles listing. */
router.get('/', function (req, res, next) {
    res.send({
        status: true,
        data: [
            {
            id: 1,
            title: 'A Mighty Flier',
            thumbnail: 'http://bing.com/th?q=hummingbird',
            content: [
                {
                    type: 'text',
                    data: "What is two inches tall, can hover in mid-air, and flies in every direction including backwards?\
                  It’s not an insect. The answer is the bee hummingbird."
                },
                {
                    type: 'image',
                    data: 'http://bing.com/th?q=hummingbird'
                },
                {
                    type: 'text',
                    data: "Most hummingbirds are about three to\
                        five inches long. But the bee hummingbird is\
                        only five centimeters, or approximately two\
                        inches, making it the smallest species of bird\
                        alive today. "
                },
                {
                    type: 'text',
                    data: "Really it isn’t bigger than a large\
                          insect. But don’t let its tiny body fool you. This\
                          bird is a fierce flier. It can beat its wings up to 80 times per second. If you ever see one in flight,\
                          you’ll notice its wings are just a blur to the human eye."

                },
                {
                    type: 'text',
                    data: "Hummingbirds are also the only\
                        vertebrates that can hover in one place. Add to that being able to fly backwards and upside\
                        down, and these creatures are amazing flying machines."
                }


            ],
            categories: {
                id: 1,
                title: 'Sports',
                thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb4sxM2QW5rdHwIAeny0HCHDBwjtgoLIiYJ20fJOxi3FSoEtlhaA'
            }

        },
        {
            id: 2,
            title: 'قصة القطة المتحيرة',
            thumbnail: 'http://cdn.lifedaily.com/wp-content/uploads/2015/08/cat-620x413.jpg',
            content: [
                {
                    type: 'text',
                    data: "في كثيرٍ من المرّات كانت القطة لولي تنظر إلى المرآة ولم يكن يعجبها شيء، كانت تتذمّر دائماً من شكلها الذي لا يعجبها، وكانت دائمة المراقبة للحيوانات الأخرى، فمرّة تحلم أن تطير مثل الطائر، ومرة تحلم أن تسبحَ مثل السّمكة، ومرة أن تقفز مثل الكنغر، وفي إحدى المرات كانت تراقب البطات من حولها وهنَّ يسبحن على سطح الماء، فأحبت أن تكون بطة تجيد السّباحة..."
                },
                {
                    type: 'image',
                    data: 'http://vignette1.wikia.nocookie.net/theevilliouschronicles/images/8/85/Confused-cat.jpg/revision/latest?cb=20150907015413'
                },
                {
                    type: 'text',
                    data: "ولكن هذا القناع لم يساعدها على أن تصير بطة حقيقية أو أن تسبح مثل باقي البطّات، ثم رأت أرنباً يقفز بسرعة ويأكل الجزر بأسنانه الكبيرة، أحبت تلك القفزات الطويلة فقررت أن تصير أرنباً، ولكن تلك الآذان الطويلة لم تُسهّل عليها عملية القفز والجري بل على العكس زادت الطّين بِلّة، وأثناء عودتها للمنزل وهي تتذمر رأت قطيعاً من الخرفان، فأحبت شكلها المستدير بصوفها الكثيف، فقررت أن تصير خروفاً جميلاً، ولكن بعض الصّوف على جسدها لم ولن يجعلها خروفاً حقيقياً وأخيراً، كان القرار الأخير هو الأغرب. "
                },
                {
                    type: 'text',
                    data: "أثناء تجوالها في أحد البساتين رأت بعض الفاكهة، فوصل طَمَعُها برغبتها أن تصير فاكهةً لذيدةً برائحةٍ طيبةٍ، فوضعت بعض قشور الفاكهة على رأسها، واستغرقت من تعبها في نومٍ عميقٍ، وفجأة شعرت كأن أحداً ما يُحرّكها من مكانها، نظرت نحو الأعلى، فرأت خرفاناً من حولها تفتح فاها محاولةً أكلها ظانّةً إياها نوعاً لذيذاً من الفاكهة، وما إن أدركت القطة هذا حتى خلعت القناع وفرّت هاربة مذعورة وهي تقول: أنا محظوظة لأنّي قطةٌ أستطيع الهرب بسرعة ولم أكن فاكهةً أو أيَّ شيء آخر، ثم عادت إلى بيتها وهي مسرورة."

                },

            ],
            categories: {
                id: 1,
                title: 'Sports',
                thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb4sxM2QW5rdHwIAeny0HCHDBwjtgoLIiYJ20fJOxi3FSoEtlhaA'
            }

        },
        ]
    });
});

module.exports = router;
