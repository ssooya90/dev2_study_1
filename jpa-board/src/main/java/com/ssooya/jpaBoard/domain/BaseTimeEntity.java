package com.ssooya.jpaBoard.domain;

import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@Getter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public class BaseTimeEntity {

	@CreatedDate
	private LocalDateTime createdDate;

	@LastModifiedDate // 조회한 Entity의 값을 변경할 때 시간이 자동 저장
	private LocalDateTime modifiedDate;
}
