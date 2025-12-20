import { registerMvuSchema } from 'https://testingcf.jsdelivr.net/gh/StageDog/tavern_resource/dist/util/mvu_zod.js';

export const Schema = z.object({
  // 时间系统
  时间: z.object({
    日期: z.string().prefault("2025年9月1日"),
    时刻: z.string().prefault("上午"),
    星期: z.string().prefault("星期一")
  }),

  // 玩家状态
  user: z.object({
    当前位置: z.string().prefault("办公室")
  }),

  // 沈馨状态
  沈馨: z.object({
    当前位置: z.string().prefault("教室"),
    好感度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    羞耻度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(80), // 初始较高
    堕落度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    焦虑值: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(90), // 学业压力
    当前穿着: z.string().prefault("宽松卫衣和牛仔裤"),

    // 细致外貌描写
    外貌: z.object({
      胸部: z.object({
        罩杯: z.string().prefault("G罩杯"),
        描述: z.string().prefault("与娇小身材极不相称的硕大双峰，丰满圆润，走路时会微微颤动"),
        特征: z.string().prefault("自然下垂感，触感柔软如棉花糖")
      }),
      臀部: z.object({
        尺寸: z.string().prefault("标准偏丰满"),
        描述: z.string().prefault("圆润饱满，微微上翘，带着少女特有的弹性和肉感"),
        特征: z.string().prefault("紧致有弹性，肉感适中")
      }),
      腰部: z.object({
        尺寸: z.string().prefault("纤细"),
        描述: z.string().prefault("腰身纤细但不骨感，带着点婴儿肥的柔软感"),
        特征: z.string().prefault("盈盈一握，柔软有肉")
      }),
      腿部: z.object({
        描述: z.string().prefault("大腿肉肉的，小腿匀称，整体显得娇小可爱"),
        特征: z.string().prefault("白皙柔软，触感如奶黄包")
      }),
      面容: z.object({
        脸型: z.string().prefault("圆脸带婴儿肥"),
        眼睛: z.string().prefault("圆圆的杏眼，纯真而明亮"),
        鼻子: z.string().prefault("小巧挺翘"),
        嘴唇: z.string().prefault("粉嫩饱满，嘟起来像樱桃"),
        描述: z.string().prefault("典型的幼态脸，看起来像初中生")
      }),
      皮肤: z.object({
        肤色: z.string().prefault("白皙"),
        质感: z.string().prefault("细腻光滑，如凝脂般柔嫩"),
        特征: z.string().prefault("容易泛起红晕")
      }),
      头发: z.object({
        长度: z.string().prefault("黑长直，长至腰部"),
        发型: z.string().prefault("高马尾，总是乱糟糟的，有几根呆毛"),
        特征: z.string().prefault("发质柔顺但不爱打理")
      }),
      身高体重: z.object({
        身高: z.string().prefault("158cm"),
        体重: z.string().prefault("约52kg"),
        体型: z.string().prefault("娇小玲珑，肉感适中")
      })
    }),

    // 改造记录
    改造记录: z.array(
      z.object({
        日期: z.string(),
        部位: z.string(),
        改造内容: z.string(),
        改造前状态: z.string(),
        改造后状态: z.string(),
        备注: z.string().optional()
      })
    ).prefault([]),

    // 当前改造项
    当前改造项: z.object({
      是否进行中: z.boolean().prefault(false),
      部位: z.string().prefault("无"),
      目标: z.string().prefault("无"),
      进度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
      开始日期: z.string().prefault(""),
      预计完成日期: z.string().prefault("")
    })
  }),

  // 物品栏
  物品栏: z.record(
    z.string().describe('物品ID'),
    z.object({
      名称: z.string(),
      数量: z.coerce.number(),
      描述: z.string()
    })
  ).prefault({})
});

$(() => {
  registerMvuSchema(Schema);
})
