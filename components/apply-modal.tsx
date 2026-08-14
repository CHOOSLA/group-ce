"use client";

import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useApply } from "@/lib/apply-context";
import { categories, findCategory } from "@/lib/categories";

const applySchema = z.object({
  cat1: z.string().min(1, "1지망 카테고리를 선택하세요"),
  cat2: z.string().optional(),
  name: z.string().min(2, "이름을 입력하세요"),
  phone: z.string().min(10, "연락처를 입력하세요"),
  channel: z.string().url("유효한 URL을 입력하세요").optional().or(z.literal("")),
  followers: z.string().optional(),
  hours: z.string().min(1, "주간 투자 가능 시간을 선택하세요"),
  oneday: z.string().optional(),
  motive: z.string().min(50, "지원 동기를 50자 이상 작성해주세요"),
});

type ApplyForm = z.infer<typeof applySchema>;

const stepTitles = ["카테고리 선택", "기본 정보", "자가진단", "완료"];

export function ApplyModal() {
  const { open, step, setOpen, setStep, initialCategory } = useApply();
  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ApplyForm>({
    resolver: zodResolver(applySchema),
    defaultValues: {
      cat1: "",
      cat2: "",
      name: "",
      phone: "",
      channel: "",
      followers: "",
      hours: "",
      oneday: "",
      motive: "",
    },
    mode: "onChange",
  });
  const [submitted, setSubmitted] = useState<ApplyForm | null>(null);

  useEffect(() => {
    if (open && initialCategory) {
      setValue("cat1", initialCategory);
    }
  }, [open, initialCategory, setValue]);

  const cat1 = watch("cat1");
  const cat2 = watch("cat2");
  const hours = watch("hours");
  const motive = watch("motive");

  const step1Valid = !!cat1;
  const step3Valid = !!hours && !!motive && motive.length >= 50;

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      reset();
      setStep(1);
      setSubmitted(null);
    }, 200);
  };

  const onSubmit = (data: ApplyForm) => {
    setSubmitted(data);
    setStep(4);
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent className="max-w-2xl w-full max-h-[90vh] overflow-y-auto p-0 gap-0 bg-paper">
        <DialogTitle className="sr-only">3기 지원서</DialogTitle>

        <div className="border-b border-line p-6">
          <div className="text-xs tracking-widest uppercase text-coral">
            CE Creating 3기 지원서
          </div>
          <div className="mt-1 font-serif text-xl">
            Step {step} / 4 · {stepTitles[step - 1]}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-px bg-line border-b border-line">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-1 ${s <= step ? "bg-coral" : "bg-paper"}`}
            />
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6">
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <Label>
                  1지망 카테고리 <span className="text-coral">*</span>
                </Label>
                <Controller
                  name="cat1"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="mt-2 w-full">
                        {cat1 ? (
                          <span>{findCategory(cat1)?.name || cat1}</span>
                        ) : (
                          <span className="text-muted-foreground">선택하세요</span>
                        )}
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((c) => (
                          <SelectItem key={c.slug} value={c.slug}>
                            {c.name} ({c.gen === 3 ? "3기 신설" : `${c.gen}기부터`})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div>
                <Label>2지망 카테고리 (선택)</Label>
                <Controller
                  name="cat2"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value || ""}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="mt-2 w-full">
                        {cat2 ? (
                          <span>{findCategory(cat2)?.name || cat2}</span>
                        ) : (
                          <span className="text-muted-foreground">없음</span>
                        )}
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((c) => (
                          <SelectItem key={c.slug} value={c.slug}>
                            {c.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div className="text-xs text-ink/60 border-l-2 border-coral pl-3">
                브랜딩 여부에 따라 CE 관여 깊이가 달라집니다. 다음 단계에서 채널 유무를 확인합니다.
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <div>
                <Label>
                  이름 <span className="text-coral">*</span>
                </Label>
                <Input
                  {...register("name")}
                  placeholder="홍길동"
                  className="mt-2"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-coral">{errors.name.message}</p>
                )}
              </div>
              <div>
                <Label>
                  연락처 <span className="text-coral">*</span>
                </Label>
                <Input
                  {...register("phone")}
                  type="tel"
                  placeholder="010-0000-0000"
                  className="mt-2"
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-coral">{errors.phone.message}</p>
                )}
              </div>
              <div>
                <Label>운영 중인 SNS 채널 URL (있는 경우)</Label>
                <Input
                  {...register("channel")}
                  type="url"
                  placeholder="https://instagram.com/…"
                  className="mt-2"
                />
                <div className="mt-1 text-xs text-ink/50">
                  커머스 수익 이력이 있으면{" "}
                  <span className="text-coral">브랜딩 O</span>로 분류됩니다.
                </div>
              </div>
              <div>
                <Label>현재 팔로워/구독자 규모</Label>
                <Controller
                  name="followers"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value || ""}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="mt-2 w-full">
                        <SelectValue placeholder="선택하세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">없음</SelectItem>
                        <SelectItem value="lt1k">1천 미만</SelectItem>
                        <SelectItem value="1k-10k">1천 ~ 1만</SelectItem>
                        <SelectItem value="10k-100k">1만 ~ 10만</SelectItem>
                        <SelectItem value="100k+">10만 이상</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5">
              <div>
                <Label>
                  주간 투자 가능 시간 <span className="text-coral">*</span>
                </Label>
                <Controller
                  name="hours"
                  control={control}
                  render={({ field }) => (
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {["5시간 미만", "5~10시간", "10~15시간", "15시간 이상"].map(
                        (opt) => (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => field.onChange(opt)}
                            className={`border px-4 py-3 text-sm transition-colors ${
                              field.value === opt
                                ? "border-coral bg-coral-soft text-coral"
                                : "border-line bg-white hover:border-ink/40"
                            }`}
                          >
                            {opt}
                          </button>
                        ),
                      )}
                    </div>
                  )}
                />
                <div className="mt-2 text-xs text-ink/50">
                  10시간 미만은 미션 이행이 어려울 수 있습니다.
                </div>
              </div>
              <div>
                <Label>원데이 클래스 참석 여부</Label>
                <Controller
                  name="oneday"
                  control={control}
                  render={({ field }) => (
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {["참석함", "아직 참석 안 함"].map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => field.onChange(opt)}
                          className={`border px-4 py-3 text-sm transition-colors ${
                            field.value === opt
                              ? "border-coral bg-coral-soft text-coral"
                              : "border-line bg-white hover:border-ink/40"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                />
              </div>
              <div>
                <Label>
                  지원 동기 <span className="text-coral">*</span>
                </Label>
                <Textarea
                  {...register("motive")}
                  rows={4}
                  placeholder="왜 지금 크리에이터가 되고 싶은지, 6개월 후의 목표는 무엇인지 자유롭게…"
                  className="mt-2"
                />
                {errors.motive && (
                  <p className="mt-1 text-xs text-coral">
                    {errors.motive.message}
                  </p>
                )}
                <div className="mt-1 text-xs text-ink/50">
                  최소 50자. &quot;왜 강의가 아니라{" "}
                  <span className="text-ink">환경</span>이 필요한가&quot;에 대한 답이 있으면 좋습니다.
                </div>
              </div>
            </div>
          )}

          {step === 4 && submitted && (
            <div className="text-center py-8">
              <div className="text-5xl">✓</div>
              <div className="mt-4 font-serif text-3xl">
                지원이 접수되었습니다.
              </div>
              <p className="mt-4 text-ink/70 max-w-md mx-auto">
                {submitted.name}님, 3~5영업일 내에 카테고리 총괄이 직접 연락드립니다.
                면접 일정은 SMS로 안내됩니다.
              </p>
              <div className="mt-6 inline-block border border-line bg-white px-6 py-4 text-left text-sm">
                <div className="text-xs tracking-widest uppercase text-ink/50">
                  지원 요약
                </div>
                <div className="mt-2 space-y-1">
                  <div>
                    1지망 ·{" "}
                    <span className="text-coral">
                      {findCategory(submitted.cat1)?.name ?? submitted.cat1}
                    </span>
                  </div>
                  {submitted.cat2 && (
                    <div>
                      2지망 · {findCategory(submitted.cat2)?.name ?? submitted.cat2}
                    </div>
                  )}
                  <div>주간 시간 · {submitted.hours}</div>
                  <div>원데이 · {submitted.oneday || "-"}</div>
                </div>
              </div>
            </div>
          )}
        </form>

        <div className="border-t border-line p-6 flex items-center justify-between">
          {step > 1 && step < 4 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="text-sm text-ink/60 hover:text-ink"
            >
              ← 이전
            </button>
          ) : (
            <div />
          )}
          {step < 3 && (
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              disabled={step === 1 && !step1Valid}
              className="bg-ink text-paper px-6 py-3 hover:bg-coral transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              다음 →
            </button>
          )}
          {step === 3 && (
            <button
              type="button"
              onClick={handleSubmit(onSubmit)}
              disabled={!step3Valid}
              className="bg-coral text-paper px-6 py-3 hover:bg-ink transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              제출하기 →
            </button>
          )}
          {step === 4 && (
            <button
              type="button"
              onClick={handleClose}
              className="bg-ink text-paper px-6 py-3 hover:bg-coral transition-colors"
            >
              닫기
            </button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
