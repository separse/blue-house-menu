import { Injectable } from '@angular/core';
import { IMenu } from 'src/models/menu';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  menu: IMenu[] = [
    // غذا
    {
      category: 'غذا',
      icon: faUtensils,
      items: [
        {
          name: 'لازانیا',
          description: 'برگه لازانیا، گوشت چرخکرده، پنیر پیتزا، ادویه مخصوص، چیپس، زیتون، سبزی',
          price: 58000,
          imagePath: '',
        },
        {
          name: 'ته‌چین مرغ',
          description: 'برنج ایرانی، زعفرون، زرشک، سینه مرغ، سبزی، زیتون',
          price: 48000,
          imagePath: '',
        },
        {
          name: 'کشک و بادمجان',
          description: 'بادمجان سرخ‌شده، کشک، نعناداغ، پیازداغ، گردو، نان',
          price: 30000,
          imagePath: '',
        },
        {
          name: 'کوبیده مرغ',
          description: 'سینه مرغ چرخ‌شده، هویج، خیارشور، زیتون، گوجه، سبزی، نان',
          price: 35000,
          imagePath: '',
        },
        {
          name: 'دلمه برگ مو',
          description: 'برنج ایرانی، سبزی معطر، لپه، سس مخصوص',
          price: 35000,
          imagePath: '',
        },
        {
          name: 'کوفته برنجی',
          description: 'برنج ایرانی، لپه، سبزی معطر، گردو، آب کوفته',
          price: 32000,
          imagePath: '',
        },
        {
          name: 'آش رشته',
          description: 'رشته آشی، سبزی آشی، عدس، لوبیا، کشک، نعناداغ، پیازداغ',
          price: 25000,
          imagePath: '',
        },
        {
          name: 'سالاد ماکارونی',
          description: 'ماکارونی فرمی، ژامبون، قارچ، ذرت، خیارشور، سس مخصوص',
          price: 38000,
          imagePath: '',
        },
        {
          name: 'پاستا پنه‌‌آلفردو چیکن',
          description: 'پاستا پنه، سینه مرغ مزه‌دارشده، قارچ، سس آلفردو، ادویه مخصوص، پنیر پارمسان',
          price: 70000,
          imagePath: '',
        },
        {
          name: 'پاستا مک اند چیز',
          description: 'پاستا مک، سینه مرغ مزه‌دارشده، قارچ، سس چدار، ادویه مخصوص،',
          price: 75000,
          imagePath: '',
        },
        {
          name: 'پاستا مک اند چیز',
          description: 'پاستا مک، سینه مرغ مزه‌دارشده، قارچ، سس چدار، ادویه مخصوص،',
          price: 75000,
          imagePath: '',
        },
        {
          name: 'ساندویچ فیتنسی',
          description: 'نان پروتئینی پیتا، سینه مرغ مزه‌دارشده، زیتون، خیارشور، گوجه کاهو، قارچ، برگ ریحان، سس بادام‌زمینی',
          price: 42000,
          imagePath: '',
        },
      ]
    },
    // صبحانه
    {
      category: 'صبحانه',
      icon: faUtensils,
      items: [
        {
          name: 'صبحانه انگلیسی',
          description: 'لوبیا، نیمرو، قارچ، بیکن، سیب‌زمینی سرخ، سوسیس',
          price: 85000,
          imagePath: '',
        },
        {
          name: 'املت',
          description: 'دو عدد تخم‌مرغ، گوجه فرنگی، قارچ، ادویه',
          price: 30000,
          imagePath: '',
        },
        {
          name: 'سوسیس تخم‌مرغ',
          description: 'دو عدد تخم‌مرغ، سوسیس، ادویه',
          price: 33000,
          imagePath: '',
        },
        {
          name: 'املت بیکن قارج',
          description: 'دو عدد تخم‌مرغ، بیکن، قارچ، ادویه',
          price: 37000,
          imagePath: '',
        },
        {
          name: 'شربت آلبالو',
          description: '',
          price: 30000,
          imagePath: '',
        },
        {
          name: 'شربت آبلیمو و عسل',
          description: '',
          price: 32000,
          imagePath: '',
        },
      ]
    },
    // پیش‌غذا و میان‌وعده
    {
      category: 'پیش‌غذا و میان‌وعده',
      icon: faUtensils,
      items: [
        {
          name: 'کیک دبل چالکت',
          description: '',
          price: 27000,
          imagePath: '',
        },
        {
          name: 'کیک بستنی',
          description: 'کیک دبل چاکلت، بستنی، خامه، موز، گردو، دراژه‌های شکلاتی',
          price: 38000,
          imagePath: '',
        },
        {
          name: 'چیزکیک شکلاتی',
          description: 'کیک شکلاتی، پنیر خامه‌ای، خامه، شکلات',
          price: 32000,
          imagePath: '',
          isNotAvailable: true,
        },
        {
          name: 'وافل شکلاتی',
          description: 'وافل طرح دونات، گاناش شکلاتی، میوه روز، بستنی، دراژه‌های شکلاتی',
          price: 35000,
          imagePath: '',
        },
        {
          name: 'سیب‌زمینی سرخ‌شده ساده',
          description: 'سیب‌زمینی، ادویه مخصوص، سس کچاپ، سس سیر',
          price: 37000,
          imagePath: '',
        },
        {
          name: 'سیب‌زمینی دودی',
          description: 'سیب‌زمینی سرخ‌شده، ادویه مخصوص، سس مخصوص',
          price: 39000,
          imagePath: '',
        },
        {
          name: 'سیب‌زمینی سرکه‌نمکی',
          description: 'سیب‌زمینی سرخ‌شده، ادویه مخصوص، سس سیر',
          price: 38000,
          imagePath: '',
        },
        {
          name: 'سیب‌زمینی پیازجعفری',
          description: 'سیب‌زمینی سرخ‌شده، ادویه مخصوص، سس سیر',
          price: 38000,
          imagePath: '',
        },
        {
          name: 'سیب‌زمینی  کچاپی',
          description: 'سیب‌زمینی سرخ‌شده، ادویه مخصوص، سس کچاپ',
          price: 38000,
          imagePath: '',
        },
        {
          name: 'سیب‌زمینی با طعم پنیر',
          description: 'سیب‌زمینی سرخ‌شده، ادویه مخصوص، سس کچاپ',
          price: 38000,
          imagePath: '',
        },
        {
          name: 'سیب‌زمینی ویژه',
          description: 'سیب‌زمینی سرخ‌شده، ژامبون، قارچ، پنیر پیتزا، ادویه مخصوص، سس کچاپ، سس سیر',
          price: 73000,
          imagePath: '',
        },
        {
          name: 'سیب‌زمینی با سس آلفردوچیکن',
          description: 'سیب‌زمینی سرخ‌شده، سینه مرغ مزه‌دارشده، سس آلفردو، قارچ، پنیر پارمسان، ادویه مخصوص',
          price: 78000,
          imagePath: '',
        },
        {
          name: 'چیپس و پنیر ویژه',
          description: 'چیپس، ژامبون، قارچ، پنیر پیتزا، ادویه مخصوص',
          price: 68000,
          imagePath: '',
        },
        {
          name: 'سالاد سزار',
          description: 'کاهو، فیله مرغ مزه‌دارشده، نان تست مزه‌دارشده با سس جعفری، پنیر پارمسان، سس سزار، گوجه، زیتون',
          price: 64000,
          imagePath: '',
        },
        {
          name: 'سالاد یونانی',
          description: 'کاهو، خیار، گوجه، پنیر فتا، گردو، گل کلم، ادویه مخصوص، سس یونانی',
          price: 55000,
          imagePath: '',
        },
      ]
    },
    // ماکتیل
    {
      category: 'ماکتیل',
      icon: faUtensils,
      items: [
        {
          name: 'موهیتو',
          description: 'لیموترش، نعناع، سودا',
          price: 29000,
          imagePath: '',
        },
        {
          name: 'رد موهیتو',
          description: 'لیموترش، نعناع، توت‌فرنگی، سودا',
          price: 35000,
          imagePath: '',
        },
        {
          name: 'لیموناد',
          description: 'لیموترش، سودا، شکر',
          price: 29000,
          imagePath: '',
        },
        {
          name: 'تروپیکال ایسلند',
          description: 'آب آناناس، آب انبه، سیروپ بلوکاراسائو',
          price: 36000,
          imagePath: '',
        },
        {
          name: 'آلوئه‌ورا اسمش',
          description: 'آب آلوئه‌ورا، سیروپ هندوانه، آب لیموترش، برگ ریحان',
          price: 36000,
          imagePath: '',
        },
        {
          name: 'لایم‌چری',
          description: 'لیوترش، سیروپ آلبالو، آلوئه‌ورا، سودا',
          price: 36000,
          imagePath: '',
        },
        {
          name: 'بلواسکای',
          description: 'آب آناناس، سیروپ بلوبری',
          price: 37000,
          imagePath: '',
        },
        {
          name: 'بلوهاوایین',
          description: 'آب اناناس، آب آلوئه‌ورا، سیروپ بلوکاراسائو، خامه',
          price: 39000,
          imagePath: '',
        },
        {
          name: 'بلوموهیتو',
          description: 'لیموترش، نعناع، سیروپ بلوبری، سودا',
          price: 37000,
          imagePath: '',
        },
      ]
    },
    // شربت خانگی
    {
      category: 'شربت خانگی',
      icon: faUtensils,
      items: [
        {
          name: 'شربت نعناع',
          description: '',
          price: 25000,
          imagePath: '',
        },
        {
          name: 'شربت انبه',
          description: '',
          price: 34000,
          imagePath: '',
        },
        {
          name: 'شربت توت‌فرنگی',
          description: '',
          price: 32000,
          imagePath: '',
        },
        {
          name: 'شربت آلبالو',
          description: '',
          price: 30000,
          imagePath: '',
        },
        {
          name: 'شربت آبلیمو و عسل',
          description: '',
          price: 32000,
          imagePath: '',
        },
      ]
    },
    // شیک
    {
      category: 'شیک',
      icon: faUtensils,
      items: [
        {
          name: 'شکلات',
          description: 'بستنی شکلاتی، شیر، پودر شکلات',
          price: 32000,
          imagePath: '',
        },
        {
          name: 'شکلات تلخ',
          description: 'بستنی شکلاتی، شیر، پودر کاکائو',
          price: 34000,
          imagePath: '',
        },
        {
          name: 'نوتلا',
          description: 'بستنی وانیل، شکلات نوتلا، شیر',
          price: 42000,
          imagePath: '',
        },
        {
          name: 'کره بادام‌زمینی',
          description: 'بستنی وانیل، کره بادام‌زمینی، شیر',
          price: 38000,
          imagePath: '',
        },
        {
          name: 'بیسکوئیت',
          description: 'بستنی وانیل، بیسکوئیت، شیر',
          price: 34000,
          imagePath: '',
        },
        {
          name: 'شکلات بیسکوئیت',
          description: 'بستنی وانیل، پودر شکلات، بیسکوئیت، شیر',
          price: 36000,
          imagePath: '',
        },
        {
          name: 'موز',
          description: 'بستنی موزی، موز، شیر',
          price: 36000,
          imagePath: '',
        },
        {
          name: 'موز شکلات',
          description: 'بستنی شکلاتی، موز، شیر',
          price: 38000,
          imagePath: '',
        },
        {
          name: 'انبه',
          description: 'بستنی انبه، انبه، شیر',
          price: 41000,
          imagePath: '',
        },
        {
          name: 'پاستیل',
          description: 'بستنی توت‌فرنگی، پاستیل، مارشملو، شیر',
          price: 37000,
          imagePath: '',
        },
        {
          name: 'بلوبری',
          description: 'بستنی وانیل، بلوبری، شیر',
          price: 47000,
          imagePath: '',
        },
        {
          name: 'اسمارتیز',
          description: 'بستنی وانیل، اسمارتیز، شیر',
          price: 35000,
          imagePath: '',
        },
        {
          name: 'لوتوس',
          description: 'بستنی وانیل، کرم‌بیسکوئیت لوتوس، شیر',
          price: 45000,
          imagePath: '',
        },
        {
          name: 'شاتوت',
          description: 'بستنی شاتوت، شاتوت، شیر',
          price: 40000,
          imagePath: '',
        },
        {
          name: 'لواشک',
          description: 'بستنی لواشکی، لواشک، شیر',
          price: 38000,
          imagePath: '',
        },
        {
          name: 'معجون',
          description: 'بستنی وانیل، پسته، فندق، بادام‌زمینی، گردو، خرما، شیر',
          price: 48000,
          imagePath: '',
        },
        {
          name: 'اسنیکرز',
          description: 'بستنی وانیل، کارامل، بادام‌زمینی، شیر',
          price: 45000,
          imagePath: '',
        },
      ]
    },
    // اسموتی
    {
      category: 'اسموتی',
      icon: faUtensils,
      items: [
        {
          name: 'منگوپیچ',
          description: 'انبه، هلو',
          price: 42000,
          imagePath: '',
        },
        {
          name: 'تروپیکال',
          description: 'انبه، موز، آناناس، توت‌فرنگی',
          price: 44000,
          imagePath: '',
        },
        {
          name: 'پیچ‌بری',
          description: 'هلو، توت‌فرنگی، موز، عسل',
          price: 42000,
          imagePath: '',
        },
      ]
    },
    // گرم‌نوش
    {
      category: 'گرم‌نوش',
      icon: faUtensils,
      items: [
        {
          name: 'چای سیاه',
          description: 'چای دمی ایرانی، نبات، هل، دارچین، گل‌محمدی',
          price: 14000,
          imagePath: '',
        },
        {
          name: 'چای زعفرونی',
          description: 'چای دمی ایرانی، زعفران، نبات',
          price: 18000,
          imagePath: '',
        },
        {
          name: 'چای سبز',
          description: 'چای سبز دمی، نبات',
          price: 16000,
          imagePath: '',
        },
        {
          name: 'چای ترش',
          description: 'چای ترش دمی، نبات',
          price: 28000,
          imagePath: '',
        },
        {
          name: 'چای ماسالا',
          description: 'شیر، ادویه‌های هندی(میخک، فلفل سیاه، زنجبیل، دارچین، هل)',
          price: 17000,
          imagePath: '',
        },
        {
          name: 'دمنوش گل گاوزبان',
          description: 'گل گاوزبان، نبات',
          price: 16000,
          imagePath: '',
        },
        {
          name: 'دمنوش بهارنارنج',
          description: 'بهارنارنج، نبات',
          price: 16000,
          imagePath: '',
        },
        {
          name: 'دمنوش به‌لیمو',
          description: 'به‌لیمو، نبات',
          price: 16000,
          imagePath: '',
        },
        {
          name: 'دمنوش گل بنفشه',
          description: 'گل بنفشه، نبات',
          price: 16000,
          imagePath: '',
        },
        {
          name: 'دمنوش آویشن',
          description: 'آویشن، نبات',
          price: 16000,
          imagePath: '',
        },
        {
          name: 'دمنوش قلنجان و سلنجان',
          description: 'چای سیاه، قلنجان و سلنجان، نبات',
          price: 20000,
          imagePath: '',
        },
      ]
    },
    // کافی
    {
      category: 'کافی',
      icon: faUtensils,
      items: [
        {
          name: 'اسپرسو',
          description: '',
          price: 17000,
          imagePath: '',
        },
        {
          name: 'امریکانو',
          description: 'اسپرسو، آب‌جوش',
          price: 18000,
          imagePath: '',
        },
        {
          name: 'آفوگاتو',
          description: 'اسپرسو، دو اسکوپ بستنی وانیلی',
          price: 30000,
          imagePath: '',
        },
        {
          name: 'کاپیچینو',
          description: 'اسپرسو، شیر، فوم شیر',
          price: 26000,
          imagePath: '',
        },
        {
          name: 'لاته ماکیاتو',
          description: 'اسپرسو، شیر، فوم شیر',
          price: 33000,
          imagePath: '',
        },
        {
          name: 'کارامل ماکیاتو',
          description: 'اسپرسو، شیر، فوم شیر، سیروپ کارامل',
          price: 34000,
          imagePath: '',
        },
        {
          name: 'شیرقهوه',
          description: 'شیر، قهوه ترک، شکر، پودر خامه',
          price: 25000,
          imagePath: '',
        },
        {
          name: 'سیروپ دلخواه',
          description: 'کارامل، فندق',
          price: 4000,
          imagePath: '',
        },
        {
          name: 'موکا',
          description: 'اسپرسو، شیر، فوم شیر، شکلات داغ',
          price: 33000,
          imagePath: '',
        },
      ]
    },
    // میکس شیر
    {
      category: 'میکس شیر',
      icon: faUtensils,
      items: [
        {
          name: 'شیرکاکائو',
          description: 'شیر، پودر کاکائو، شکر',
          price: 25000,
          imagePath: '',
        },
        {
          name: 'شیرنوتلا',
          description: 'شیر، شکلات نوتلا',
          price: 34000,
          imagePath: '',
        },
        {
          name: 'شیرعسل',
          description: 'شیر، عسل',
          price: 20000,
          imagePath: '',
        },
        {
          name: 'شیرعسل‌دارچین',
          description: 'شیر، عسل، دارچین',
          price: 21000,
          imagePath: '',
        },
        {
          name: 'شیرنارگیل',
          description: 'شیر، پودر نارگیل، عسل',
          price: 28000,
          imagePath: '',
        },
      ]
    },
    // قهوه دمی
    {
      category: 'قهوه دمی',
      icon: faUtensils,
      items: [
        {
          name: 'ترک',
          description: '',
          price: 17000,
          imagePath: '',
        },
        {
          name: 'کمکس',
          description: '',
          price: 32000,
          imagePath: '',
        },
        {
          name: 'فرانسه',
          description: '',
          price: 24000,
          imagePath: '',
        },
      ]
    },
    // هات‌چاکلت
    {
      category: 'هات‌چاکلت',
      icon: faUtensils,
      items: [
        {
          name: 'کلاسیک',
          description: 'شیر، پودر شکلات',
          price: 28000,
          imagePath: '',
        },
        {
          name: 'فندقی',
          description: 'شیر، پودر شکلات، فندق',
          price: 33000,
          imagePath: '',
        },
        {
          name: 'دارک',
          description: 'شیر، پودر کاکائو',
          price: 32000,
          imagePath: '',
        },
        {
          name: 'مارشمالو',
          description: 'شیر، پودر شکلات، مارشمالو',
          price: 32000,
          imagePath: '',
        },
        {
          name: 'کارامل',
          description: 'شیر، پودر شکلات، سیروپ کارامل',
          price: 29000,
          imagePath: '',
        },
        {
          name: 'پینک‌چالت',
          description: 'شیر، پودر شکلات توت‌فرنگی',
          price: 28000,
          imagePath: '',
        },
      ]
    },
  ]
}
