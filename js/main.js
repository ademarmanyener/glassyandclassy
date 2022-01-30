function getListRandom(list) {
    return list[Math.floor((Math.random()*list.length))];
}

function workInProgressAlert(){
    Swal.fire({
        icon: 'info',
        title: 'Work in Progress',
        text: "i'm probably working on it, if i haven't already forgotten.",
        confirmButtonText:'OK',
    });
}

function iGotYouBitch(){
    let wisdom_array = [
        'BIG BROTHER IS WATCHING YOU!',
        'Be with Christ!',
        'Start with Jesus, stay with Jesus, end with Jesus.',
        'Shame on you!',
        'Allah ıslak etsin.',
        'Allah ıslahat etsin.',
        'Müslüman adamın ne işi olur OnlyFans ile?',
        'https://www.muslimmarriageguide.com/sexual-perversion-in-islam/',
        'The Prophet (sallallahu alaihi wasallam)said: “A man should not lie with another man and a woman should not lie with another woman without covering their private parts except a child or a father.” (Abu Dawood)',
        'And Allah says (interpretation of the meaning): “Nay, Allah never commands Fahshaa’ (evil deeds, unlawful sexual intercourse). Do you say of Allah what you know not?” [al-A’raaf 7:28]',
        '“Do you approach the males of humanity, leaving the wives Allah has created for you? But you are a people who transgress” (Quran 26:165-66).',
        'Lût’a gelince o, kavmine demişti ki: “Siz, kesinlikle daha önce hiçbir milletten hiç kimsenin yapmadığı bir hayâsızlığı yapıyorsunuz.”',
        'وَلُوطاً اِذْ قَالَ لِقَوْمِهٖٓ اِنَّكُمْ لَتَأْتُونَ الْفَاحِشَةَؗ مَا سَبَقَكُمْ بِهَا مِنْ اَحَدٍ مِنَ الْعَالَمٖينَ ﴿٢٨﴾',
        'اَئِنَّكُمْ لَتَأْتُونَ الرِّجَالَ وَتَقْطَعُونَ السَّبٖيلَ وَتَأْتُونَ فٖي نَادٖيكُمُ الْمُنْكَرَؕ فَمَا كَانَ جَوَابَ قَوْمِهٖٓ اِلَّٓا اَنْ قَالُوا ائْتِنَا بِعَذَابِ اللّٰهِ اِنْ كُنْتَ مِنَ الصَّادِقٖينَ ﴿٢٩﴾',
        'وَلَمَّٓا اَنْ جَٓاءَتْ رُسُلُنَا لُـوطاً سٖٓيءَ بِهِمْ وَضَـاقَ بِهِمْ ذَرْعاً وَقَالُوا لَا تَخَفْ وَلَا تَحْزَنْࣞ اِنَّا مُنَجُّوكَ وَاَهْلَكَ اِلَّا امْرَاَتَكَ كَانَتْ مِنَ الْغَابِرٖينَ ﴿٣٣﴾',
        'Lût, “Şu ahlâkı bozan topluluğa karşı bana yardım et rabbim!” diye dua etti.',
        '“Biz, yoldan çıkmalarının cezası olarak bu memleket halkının üzerine gökten alçaltıcı bir belâ indireceğiz!”',
        '"Do not lie with a man as one lies with a woman; that is detestable" (Leviticus 18:22) and "If a man lies with a man as one lies with woman, both of them have done what is detestable. They must be put to death; their blood will be on their own heads" (Leviticus 20:13).',
    ];
    Swal.fire({
        icon: 'error',
        title: 'HARAM ALERT',
        text: getListRandom(list=wisdom_array),
        confirmButtonText:'tövbe ettim',
    });
}